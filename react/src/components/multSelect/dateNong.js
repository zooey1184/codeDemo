import calendar from './dateOrigin'

/**
 * 返回农历y年一整年的总天数
 * @param lunar Year
 * @return Number
 * @eg:var count = calendar.lYearDays(1987) ;//count=387
 */
const lYearDays = (y)=> {
  let sum = 348;
  for (let i = 0x8000; i > 0x8; i >>= 1) {
    sum += (calendar.lunarInfo[y - 1900] & i) ? 1 : 0;
  }
  return (sum + calendar.leapDays(y));
}

/**
 * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
 * @param lunar Year
 * @return Number (0-12)
 * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
 */
const leapMonth = (y)=> { //闰字编码 \u95f0
  return (calendar.lunarInfo[y - 1900] & 0xf);
}

/**
 * 返回农历y年闰月的天数 若该年没有闰月则返回0
 * @param lunar Year
 * @return Number (0、29、30)
 * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
 */
const leapDays = (y)=> {
  if (calendar.leapMonth(y)) {
    return ((calendar.lunarInfo[y - 1900] & 0x10000) ? 30 : 29);
  }
  return (0);
}

/**
 * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
 * @param lunar Year
 * @return Number (-1、29、30)
 * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
 */
const monthDays = (y, m)=> {
  if (m > 12 || m < 1) {
    return -1
  } //月份参数从1至12，参数错误返回-1
  return ((calendar.lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
}

/**
 * 返回公历(!)y年m月的天数
 * @param solar Year
 * @return Number (-1、28、29、30、31)
 * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
 */
const solarDays = (y, m)=> {
  if (m > 12 || m < 1) {
    return -1
  } //若参数错误 返回-1
  var ms = m - 1;
  if (ms === 1) { //2月份的闰平规律测算后确认返回28或29
    let t = (y % 4 === 0) && (y % 100 !== 0)
    return (( t || (y % 400 === 0)) ? 29 : 28);
  } else {
    return (calendar.solarMonth[ms]);
  }
}

/**
 * 农历年份转换为干支纪年
 * @param  lYear 农历年的年份数
 * @return Cn string
 */
const toGanZhiYear = (lYear)=> {
  let ganKey = (lYear - 3) % 10;
  let zhiKey = (lYear - 3) % 12;
  if (ganKey === 0) ganKey = 10; //如果余数为0则为最后一个天干
  if (zhiKey === 0) zhiKey = 12; //如果余数为0则为最后一个地支
  return calendar.Gan[ganKey - 1] + calendar.Zhi[zhiKey - 1];
}

 /**
  * 公历月、日判断所属星座
  * @param  cMonth [description]
  * @param  cDay [description]
  * @return Cn string
  */
const toAstro = (cMonth, cDay)=> {
  let s = "\u9b54\u7faf\u6c34\u74f6\u53cc\u9c7c\u767d\u7f8a\u91d1\u725b\u53cc\u5b50\u5de8\u87f9\u72ee\u5b50\u5904\u5973\u5929\u79e4\u5929\u874e\u5c04\u624b\u9b54\u7faf";
  let arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
  return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5ea7"; //座
}

/**
* 传入offset偏移量返回干支
* @param offset 相对甲子的偏移量
* @return Cn string
*/
const toGanZhi = (offset)=> {
  return calendar.Gan[offset % 10] + calendar.Zhi[offset % 12];
}

/**
 * 传入公历(!)y年获得该年第n个节气的公历日期
 * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起 
 * @return day Number
 * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
 */
const getTerm = (y, n)=> {
  if (y < 1900 || y > 2100) {
    return -1;
  }
  if (n < 1 || n > 24) {
    return -1;
  }
  let _table = calendar.sTermInfo[y - 1900];
  let _info = [
    parseInt('0x' + _table.substr(0, 5)).toString(),
    parseInt('0x' + _table.substr(5, 5)).toString(),
    parseInt('0x' + _table.substr(10, 5)).toString(),
    parseInt('0x' + _table.substr(15, 5)).toString(),
    parseInt('0x' + _table.substr(20, 5)).toString(),
    parseInt('0x' + _table.substr(25, 5)).toString()
  ];
  let _calday = [
    _info[0].substr(0, 1),
    _info[0].substr(1, 2),
    _info[0].substr(3, 1),
    _info[0].substr(4, 2),

    _info[1].substr(0, 1),
    _info[1].substr(1, 2),
    _info[1].substr(3, 1),
    _info[1].substr(4, 2),

    _info[2].substr(0, 1),
    _info[2].substr(1, 2),
    _info[2].substr(3, 1),
    _info[2].substr(4, 2),

    _info[3].substr(0, 1),
    _info[3].substr(1, 2),
    _info[3].substr(3, 1),
    _info[3].substr(4, 2),

    _info[4].substr(0, 1),
    _info[4].substr(1, 2),
    _info[4].substr(3, 1),
    _info[4].substr(4, 2),

    _info[5].substr(0, 1),
    _info[5].substr(1, 2),
    _info[5].substr(3, 1),
    _info[5].substr(4, 2),
  ];
  return parseInt(_calday[n - 1]);
}

/**
 * 传入农历数字月份返回汉语通俗表示法
 * @param lunar month
 * @return Cn string
 * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
 */
const toChinaMonth = (m)=> { // 月 => \u6708
  if (m > 12 || m < 1) {
    return -1
  } //若参数错误 返回-1
  let s = calendar.nStr3[m - 1];
  s += "\u6708"; //加上月字
  return s;
}

/**
 * 传入农历日期数字返回汉字表示法
 * @param lunar day
 * @return Cn string
 * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
 */
const toChinaDay = (d)=> { //日 => \u65e5
  var s;
  switch (d) {
    case 10:
      s = '\u521d\u5341';
      break;
    case 20:
      s = '\u4e8c\u5341';
      break;
    case 30:
      s = '\u4e09\u5341';
      break;
    default:
      s = calendar.nStr2[Math.floor(d / 10)];
      s += calendar.nStr1[d % 10];
  }
  return (s);
}

/**
* 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
* @param y year
* @return Cn string
* @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
*/
const getAnimal = (y)=> {
  return calendar.Animals[(y - 4) % 12]
}

/**
 * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
 * @param y  solar year
 * @param m  solar month
 * @param d  solar day
 * @return JSON object
 * @eg:console.log(calendar.solar2lunar(1987,11,01));
 */
const solar2lunar = (yy, mm, dd)=> { //参数区间1900.1.31~2100.12.31
  //年份限定、上限
  if (yy < 1900 || yy > 2100) {
    return -1; // undefined转换为数字变为NaN
  }
  //公历传参最下限
  if (yy === 1900 && mm === 1 && dd < 31) {
    return -1;
  }
  //未传参  获得当天
  let objDate = new Date(yy, parseInt(mm) - 1, dd)
  if (!yy) {
    objDate = new Date();
  }
  let leap = 0
  let temp = 0;
  //修正ymd参数
  let y = objDate.getFullYear()
  let m = objDate.getMonth() + 1
  let d = objDate.getDate()
  let offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
  let i = undefined
  for (i = 1900; i < 2101 && offset > 0; i++) {
    temp = calendar.lYearDays(i);
    offset -= temp;
  }
  if (offset < 0) {
    offset += temp;
    i--;
  }

  //是否今天
  let isTodayObj = new Date()
  let isToday = false;
  if (isTodayObj.getFullYear() === y && isTodayObj.getMonth() + 1 === m && isTodayObj.getDate() === d) {
    isToday = true;
  }
  //星期几
  let nWeek = objDate.getDay()
  let cWeek = calendar.nStr1[nWeek];
  //数字表示周几顺应天朝周一开始的惯例
  if (nWeek === 0) {
    nWeek = 7;
  }
  //农历年
  var year = i;
  leap = calendar.leapMonth(i); //闰哪个月
  var isLeap = false;

  //效验闰月
  for (i = 1; i < 13 && offset > 0; i++) {
    //闰月
    if (leap > 0 && i === (leap + 1) && isLeap === false) {
      --i;
      isLeap = true;
      temp = calendar.leapDays(year); //计算农历闰月天数
    } else {
      temp = calendar.monthDays(year, i); //计算农历普通月天数
    }
    //解除闰月
    if (isLeap === true && i === (leap + 1)) {
      isLeap = false;
    }
    offset -= temp;
  }
  // 闰月导致数组下标重叠取反
  if (offset === 0 && leap > 0 && i === leap + 1) {
    if (isLeap) {
      isLeap = false;
    } else {
      isLeap = true;
      --i;
    }
  }
  if (offset < 0) {
    offset += temp;
    --i;
  }
  //农历月
  var month = i;
  //农历日
  var day = offset + 1;
  //天干地支处理
  var sm = m - 1;
  var gzY = calendar.toGanZhiYear(year);

  // 当月的两个节气
  // bugfix-2017-7-24 11:03:38 use lunar Year Param `y` Not `year`
  var firstNode = calendar.getTerm(y, (m * 2 - 1)); //返回当月「节」为几日开始
  var secondNode = calendar.getTerm(y, (m * 2)); //返回当月「节」为几日开始

  // 依据12节气修正干支月
  var gzM = calendar.toGanZhi((y - 1900) * 12 + m + 11);
  if (d >= firstNode) {
    gzM = calendar.toGanZhi((y - 1900) * 12 + m + 12);
  }

  //传入的日期的节气与否
  var isTerm = false;
  var Term = null;
  if (firstNode === d) {
    isTerm = true;
    Term = calendar.solarTerm[m * 2 - 2];
  }
  if (secondNode === d) {
    isTerm = true;
    Term = calendar.solarTerm[m * 2 - 1];
  }
  //日柱 当月一日与 1900/1/1 相差天数
  var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
  var gzD = calendar.toGanZhi(dayCyclical + d - 1);
  //该日期所属的星座
  var astro = calendar.toAstro(m, d);

  return {
    lYear: year,
    lMonth: month,
    lDay: day,
    Animal: calendar.getAnimal(year),
    IMonthCn: (isLeap ? "\u95f0" : '') + calendar.toChinaMonth(month),
    IDayCn: calendar.toChinaDay(day),
    cYear: y,
    cMonth: m,
    cDay: d,
    gzYear: gzY,
    gzMonth: gzM,
    gzDay: gzD,
    isToday: isToday,
    isLeap: isLeap,
    nWeek: nWeek,
    ncWeek: "\u661f\u671f" + cWeek,
    isTerm: isTerm,
    Term: Term,
    astro: astro
  };
}

/**
 * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
 * @param y  lunar year
 * @param m  lunar month
 * @param d  lunar day
 * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
 * @return JSON object
 * @eg:console.log(calendar.lunar2solar(1987,9,10));
 */
const lunar2solar = (y, m, d, isLeapMonth)=> { //参数区间1900.1.31~2100.12.1
  var leapMonth = calendar.leapMonth(y);
  if (isLeapMonth && (leapMonth !== m)) {
    return -1;
  } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
  // eslint-disable-next-line no-mixed-operators
  if (y === 2100 && m === 12 && d > 1 || y === 1900 && m === 1 && d < 31) {
    return -1;
  } //超出了最大极限值 
  var day = calendar.monthDays(y, m);
  var _day = day;
  //bugFix 2016-9-25 
  //if month is leap, _day use leapDays method 
  if (isLeapMonth) {
    _day = calendar.leapDays(y, m);
  }
  if (y < 1900 || y > 2100 || d > _day) {
    return -1;
  } //参数合法性效验

  //计算农历的时间差
  let offset = 0;
  for (let i = 1900; i < y; i++) {
    offset += calendar.lYearDays(i);
  }
  let leap = 0
  let isAdd = false;
  for (let i = 1; i < m; i++) {
    leap = calendar.leapMonth(y);
    if (!isAdd) { //处理闰月
      if (leap <= i && leap > 0) {
        offset += calendar.leapDays(y);
        isAdd = true;
      }
    }
    offset += calendar.monthDays(y, i);
  }
  //转换闰月农历 需补充该年闰月的前一个月的时差
  if (isLeapMonth) {
    offset += day;
  }
  //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
  var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
  var calObj = new Date((offset + d - 31) * 86400000 + stmap);
  var cY = calObj.getUTCFullYear();
  var cM = calObj.getUTCMonth() + 1;
  var cD = calObj.getUTCDate();

  return calendar.solar2lunar(cY, cM, cD);
}

export {
  lYearDays, // 返回农历y年一整年的总天数
  leapMonth, // 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
  leapDays, // 返回农历y年闰月的天数 若该年没有闰月则返回0
  monthDays, // 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
  solarDays, // 返回公历(!)y年m月的天数
  toGanZhiYear, // 农历年份转换为干支纪年
  toAstro, // 公历月、日判断所属星座
  getTerm, // 传入公历(!)y年获得该年第n个节气的公历日期
  toGanZhi, // 传入offset偏移量返回干支
  toChinaMonth, // 传入农历数字月份返回汉语通俗表示法
  toChinaDay, // 传入农历日期数字返回汉字表示法
  getAnimal, // 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
  solar2lunar, // 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
  lunar2solar // 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
}