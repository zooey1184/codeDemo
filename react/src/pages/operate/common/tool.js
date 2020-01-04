class Tool {
  constructor() {
    this.timer = undefined
  }
  throttle(fn, wait) {
    if(this.timer) {
      clearTimeout(this.timer)
    }
    this.timer = setTimeout(()=>{
      fn()
    }, wait)
  }
}

export default Tool