import React from 'react'
import arrow from './arrow.png'
import './cell.less'

interface ICell {
  title?: string,
  width?: number,
  leftStyle?: object,
  rightStyle?: object,
  height?: number,
  children?: any,
  left?: any,
  right?: any,
  showRight?: boolean
}
const Cell:React.FC<ICell> = (props)=> {
  const Left = ()=> {
    return props.left ? props.left : (props.title ? props.title : null)
  }
  const Right = () => {
    return props.showRight ?
      (props.right ? props.right : (
        <div>
          <img src={arrow} alt=""/>
        </div>
      )) : null
  }
  return (
    <div className='cell underline f_flex f_a_c f_j_sb'>
      <div className='f_flex f_a_c titlePane'>
        <div style={props.leftStyle ? props.leftStyle : { width: props.width ? `${props.width}px` : '50px' }}>
          {Left()}
        </div>
        <div>
          {props.children ? props.children : null}
        </div>
      </div>
      <div className='right' style={props.rightStyle ? props.rightStyle : {} }>
        {Right()}
      </div>
    </div>
  )
}

export default Cell
