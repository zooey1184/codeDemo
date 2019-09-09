interface Ick {
  key: string,
  val: any,
  time?: number,
  path?: string
}
interface Ikey {
  [propName: string]: any;
}
let cookie = {
  /**
   * 设置cookie {key, val, time(ms单位), path}
   * @param {*} ck
   */
  setCookie(ck: Ick) {
    let expires = ''
    let p = ''
    if (ck.time) {
      let d = new Date()
      d.setTime(d.getTime() + ck.time)
      expires = `; expires=${d.toUTCString()}`
    }
    if (ck.path) {
      p = `; path=${ck.path}`
    }
    document.cookie = `${ck.key}=${ck.val}${expires}${p}`
  },

  /**
   * 获取cookie 如果存在参数key 则返回键值，否则返回对象
   * @param {*} key
   * @returns
   */
  getCookie(key?:string) {
    let c = document.cookie.split('; ')
    let obj:Ikey = {}
    if (c.length > 0) {
      c.map(item => {
        let sp = item.split('=')
        obj[sp[0]] = sp[1]
      })
    }
    if (key) {
      if (key in obj) {
        return obj[key]
      } else {
        return null
      }
    }
    return obj
  }
}
export default cookie
