import React from 'react'
import './middlePane.less'

interface MiddleProps {
  order_no: string
}
const MiddlePane:React.FC<MiddleProps> = (props)=> {
  return (
    <div className='_home_middle'>
      <p>订单号: {props.order_no}</p>
      <h4>您有一笔正在进行中的贷款</h4>
    </div>
  )
}
export default MiddlePane
