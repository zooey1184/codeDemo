import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './style.less'
import './../../common/css/transition.less'
// 单例模式
let div = document.getElementById('__mask')
if(!div) {
  div = document.createElement('div')
  div.setAttribute('id', '__mask')
  document.body.appendChild(div)
}
const Model = props => {
  const [inProp, setInProp] = useState(false);
  useEffect(()=> {
    setInProp(true)
    return () => setInProp(false)
  }, [])
  const handleFn = props.change ? (e)=> {
    if(!e._modelCallback) {
      e._modelCallback = () => setInProp(false)
    } else {
      e._modelCallback = () => setInProp(false)
    }
    props.change(e)
  } : null
  return (
    <CSSTransition in={inProp} classNames='fade' timeout={300}>
      <div onClick={(e)=> handleFn(e)} className='__model'>
        {props.children}
      </div>
    </CSSTransition>
  )
}
const Mask = propsMask => {
  let close = undefined
  const closeFn = (e) => {
    close = e._modelCallback
    let a = e.target.className.split(' ')
    let t = a.some(item => item === '__model')
    if (t) {
      if (propsMask && propsMask.model) {
        propsMask.model()
      } else {
        obj.hide()
      }
      if (close) {
        close()
      }
    }
  }
  const obj = {
    show: (props) => {
      return ReactDOM.render((
        <Model change={(e)=> closeFn(e)}>
          {
            (propsMask && propsMask.children) ? propsMask.children: (props ? props : null)
          }
        </Model>
      ), div)
    },
    hide: () => {
      setTimeout(()=> {
        ReactDOM.unmountComponentAtNode(div)
        document.body.removeChild(div)
      }, 300)
      setTimeout(()=> {
        div = document.createElement('div')
        div.setAttribute('id', '__mask')
        document.body.appendChild(div)
      }, 310)
    }
  }
  return obj
}

export default Mask