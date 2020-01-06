import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import './../../common/css/transition.scss'
// 动画的包裹  否则加入节点会让动画显得生硬
// 插件在插入节点的一瞬间会初始化显示  所以插件的一开始需要透明度为0 并且设置动画的enter时 opacity: 0 !important
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
 * @returns
 */
const plugin = (Component, props={}) => {
  // 设置获取节点
  const id = `__plugin_${props.id || 'protal'}`
  let div = document.getElementById(id)
  const beforeRemoveTime = 300 // 移除节点前留给动画的时间避免生硬过度
  let canBeRemoveNode = false // 等否被移除节点 防止多次执行hide()

  /**
   * 展示组件方法
   * showProps定制化配置可以覆盖props的初始配置
   * className && style 为默认配置
   */
  const show = (showProps) => {
    if(!canBeRemoveNode) {
      canBeRemoveNode = true
      // 合并两个传参 并最终以show的为最终参数   props为默认参数
      let obj = Object.assign({}, props, showProps)
      showProps = obj
      // 设置默认样式
      let className = obj.className || []
      let style = obj.style || {}
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
  }

  /**
   * 移除节点 beforeRemoveTime为消失所需要动画时间，
   * 动画完成则删除节点并为下一次使用创建节点
   * 避免突然消失动画上面的生硬 默认300ms
   * 且暂时不配置
   */
  const hide = ()=> {
    if (canBeRemoveNode) {
      
      // 公共方法用于执行原组件消除动画  否则直接删除节点会生硬
      const pid = `before${id}HideFn`
      if (window[pid]) {
        window[pid]()
      }

      // 移除节点
      setTimeout(() => {
        canBeRemoveNode = false
        ReactDOM.unmountComponentAtNode(div)
        document.body.removeChild(div)
      }, beforeRemoveTime)

      // 生成新节点用于注入组件
      setTimeout(() => {
        div = document.createElement('div')
        div.setAttribute('id', id)
        document.body.appendChild(div)
      }, beforeRemoveTime + 20)
    }
  }
  return {show, hide}
}

export default plugin
