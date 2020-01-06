import React, {useState, useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import {BtnGroup} from './btn'
import './../../common/css/transition.scss'
import './../../common/css/flex.scss'
import './style.scss'

const cssPre  = '__C-Dialog'
const Dialog = props=> {
  const [inProp, setInProp] = useState(false)
  const ref = useRef()
  
  useEffect(()=> {
    const pid = ref.current.parentElement.id
    const idname = `before${pid}HideFn`
    setTimeout(()=> {
      setInProp(true)
      window[idname] = function () {
        setInProp(false)
      }
    })
    // unmounted
    return ()=> {
      setInProp(false)
      setTimeout(()=> {
        window[idname] = undefined
      }, 300)
    }
  }, [])
  const animate = props.animate || 'fade'
  const className = [`${cssPre}-Pane`, ...props.className] || [`${cssPre}-Pane`]
  const style = props.style || {}

  const Msg = () => {
    const title = props.title || 'Tip'
    const msg = props.msg || null
    return (
      <div className={`${cssPre}-MsgPane`}>
        <h3 className={`${cssPre}-MsgPane-Title`}>{title}</h3>
        {msg}
      </div>
    )
  }

  const Content = ()=> {
    return props.children ? props.children : (
      <div className={className.join(' ')} style={style}>
        {Msg()}
        {
          BtnGroup(props.btn)
        }
      </div>
    )
  }
  
  return (
    <CSSTransition  in={inProp} classNames='fade' timeout={300}>
      <div className={`${cssPre}`} ref={ref}>
        <CSSTransition in={inProp} classNames={animate} timeout={300}>
          <Content/>
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}

export default Dialog