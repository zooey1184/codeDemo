import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './../../common/css/transition.less'
// 动画的包裹  否则加入节点会让动画显得生硬
const Wrap = props => {
  const [state, setState] = useState(false)
  // mounted 的时候就添加动画 为入方向
  useEffect(()=> {
    setState(true)
    return ()=> setState(false)
  }, [])
  return (
    <CSSTransition in={state} classNames='fade' timeout={300}>
      {props.children}
    </CSSTransition>
  )
}

/**
 * 插件的包裹类
 * @param {*} Component 组件
 * @param {*} [props={}] 初始化配置
 * @returns // show的参数可以覆盖初始化配置
 */
const plugin = (Component, props={}) => {
  // 设置获取节点
  let id = `__plugin_${props.id || 'protal'}`
  let div = document.getElementById(id)
  const beforeRemoveTime = 300
  const show = (showProps) => {
    // 设置默认样式
    let className = showProps.className || props.className || []
    let style = showProps.style || props.style || {}
    showProps.className = className
    showProps.style = style
    
    // 是否有时间消除节点 若时间大于0 则为time时间后移除节点，否则需要主动移除节点
    let time = showProps.duration || props.duration || 0
    if (time) {
      showProps.duration = time
      setTimeout(()=> {
        hide()
      }, time)
    }

    // 若没有节点  则创建节点
    if (!div) {
      div = document.createElement('div')
      div.setAttribute('id', id)
      document.body.appendChild(div)
    }

    // 返回高阶组件 并渲染dom
    return ReactDOM.render((
      <Wrap>
        <Component {...showProps}></Component>
      </Wrap>
    ), div)
  }

  // 移除节点 beforeRemoveTime为消失所需要动画时间，动画完成则删除节点并为下一次使用创建节点   避免突然消失动画上面的生硬  默认300ms  且暂时不能配置
  const hide = ()=> {
    setTimeout(() => {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }, beforeRemoveTime)
    setTimeout(() => {
      div = document.createElement('div')
      div.setAttribute('id', id)
      document.body.appendChild(div)
    }, beforeRemoveTime + 20)
  }
  return {show, hide}
}

export default plugin
