import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.less'
import './../../common/css/flex.less'
const Toast = props => {
  const Msg = props.children ? props.children : (props.msg ? props.msg : null)
  const time = props.duration || 0
  const style = props.style || {}
  const className = props.className || []
  const animate = props.animate || 'slideDown'
  const toastClassName = ['__c-toast', 'f_flex', 'f_a_c', 'f_j_c']
  const [state, setState] = useState(false)
  useEffect(()=> {
    setState(true)
    if(time > 0) {
      setTimeout(() => {
        setState(false)
      }, time)
    }
  }, [time])
  return (
    <CSSTransition in={state} timeout={500} classNames={animate}>
      <div className={[...toastClassName, ...className].join(' ')}  style={style}>
        {Msg}
      </div>
    </CSSTransition>
  )
}

export default Toast