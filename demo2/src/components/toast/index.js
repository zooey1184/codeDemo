import React, {useState, useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.scss'
import './../../common/css/flex.scss'
const Toast = props => {
  const Msg = props.children ? props.children : (props.msg ? props.msg : null)
  const time = props.duration || 0
  const style = props.style || {}
  const className = props.className || []
  const animate = props.animate || 'slideDown'
  const toastClassName = ['__C-Toast', 'f_flex', 'f_a_c', 'f_j_c']
  const [state, setState] = useState(false)
  const ref = useRef()
  useEffect(()=> {
    setState(true)
    const pid = ref.current.parentElement.id
    const idname = `before${pid}HideFn`
    if(time > 0) {
      setTimeout(() => {
        setState(false)
      }, time)
    }
    window[idname] = function () {
      setState(false)
    }
    // unmounted
    return () => {
      setState(false)
      setTimeout(() => {
        window[idname] = undefined
      }, 300)
    }
  }, [time])
  return (
    <CSSTransition in={state} timeout={300} classNames={animate}>
      <div className={[...toastClassName, ...className].join(' ')} ref={ref}  style={style}>
        {Msg}
      </div>
    </CSSTransition>
  )
}

export default Toast