// 通过范围获取年份
const  _getYearRange = (range)=> {
  let date = new Date()
  let yy = date.getFullYear()
  let rt = []
  if (range && range.length > 0) {
    if (range[0] > 0) { // [1960[?, 2100]]
      rt[0] = range[0]
      if (range[1]) {
        rt[1] = range[1]
      } else {
        rt[1] = yy
      }
    } else { // [-50[?, 10]]
      rt[0] = yy + range[0]
      if (range[1]) {
        rt[1] = range[1] + yy
      } else {
        rt[1] = yy
      }
    }
  } else {
    rt = [yy - 100, yy]
  }
  return rt
}
// 获取年份
const getYear = (range, suffix = '年') => {
  let _range = _getYearRange(range)
  let arr = []
  for (let i = _range[1]; i >= _range[0]; i--) {
    arr.push({
      text: i + suffix,
      value: i
    })
  }
  return arr
}
// 获取月份
const getMonth = (suffix = '月')=> {
  let arr = []
  for (let i = 1; i <= 12; i++) {
    arr.push({
      text: i + suffix,
      value: i
    })
  }
  return arr
}
// 通过年月确定日的长度
const getDay = (y, M, suffix = '日')=> {
  let days = 30
  let arr = []
  let m = M.toString()
  if (m.match(/[1,3,5,7,8,10,12]/)) {
    days = 31
  }
  if (m === '2') {
    if (y % 4 === 0) {
      days = 29
    } else {
      days = 28
    }
  }
  for (let i = 1; i <= days; i++) {
    arr.push({
      text: i + suffix,
      value: i
    })
  }
  return arr
}

export {
  getYear,
  getMonth,
  getDay
}