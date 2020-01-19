class Global {
  constructor() {
    this.name = 'global'
  }
  ua() {
    const ua = window.navigator.userAgent
    return {
      isQQ: /mqqbrowser/i.test(ua) && !/MicroMessenger/i.test(ua),
      isWX: /MicroMessenger/i.test(ua),
      isANDROID: /Android/i.test(ua) || /Linux/i.test(ua),
      isIOS: /(iPhone|iPad|iPod|iOS|Mac)/i.test(ua),
      isWEBAPP: u.indexOf('Safari') === -1,
      isMOBILE: /AppleWebKit.*Mobile.*/i.test(ua),
      isTOUCH: 'ontouchstart' in document, // 可触摸 pad 手机...
      isUC: /UCWEB/i.test(ua),
      isOPERA: /Opera/i.test(ua),
      isALIPAY: /AlipayClient/i.test(ua), // 支付宝内置浏览器
      isWEIBO: /WeiBo/i.test(ua) // 微博内置浏览器
    }
  }
  mixins() {
    let args = [...arguments]
    if (args.length > 0) {
      args.map(item => {
        if (item instanceof Object && typeof item !== 'function') {
          for (let i in item) {
            Global.prototype[i] = item[i]
          }
        } else {
          console.warn(`error at mixins [${item} is ${typeof item}]: params must be Object`)
        }
      })
    }
    return this
  }
}

export default new Global()