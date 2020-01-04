import React, {useState, useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import {BtnGroup} from './btn'
import './../../common/css/transition.less'
import './../../common/css/flex.less'
import './style.less'
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
  const className = ['__dialogPane', ...props.className] || ['__dialogPane']
  const style = props.style || {}
  // const hide = () => {
  //   setInProp(false)
  //   if (props.hide) {
  //     props.hide()
  //   }
  // }
  // const BtnItem = props => {
  //   const len = props.length
  //   return props.map((item, index) => {
  //     let style = item.style ? item.style : {}
  //     return (
  //       <div
  //         className='__dialogBtnItem f_flex f_a_c f_j_c'
  //         style={{
  //           width: `${Math.ceil(100/len)}%`,
  //           borderRight: index<(len-1) ? '1px solid #eee' : '0px',
  //           ...style
  //         }}
  //         onClick={()=> {
  //           hide()
  //           item.fn()
  //         }}
  //         key={index.toString()}>
  //         {item.text}
  //       </div>
  //     )
  //   })
  // }
  // const BtnGroup = props => {
  //   return props && props.length > 0 ? (
  //     <div className='__dialogBtnGroup f_flex'>
  //       {BtnItem(props)}
  //     </div>
  //   ) : null
  // }

  const Msg = () => {
    const title = props.title || 'Tip'
    const msg = props.msg || null
    return (
      <div className='msgPane'>
        <h3 className='_msgTitle'>{title}</h3>
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
      <div className='__dialogWrap' ref={ref}>
        <CSSTransition in={inProp} classNames={animate} timeout={300}>
          <Content/>
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}

export default Dialog