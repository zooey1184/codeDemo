import React from 'react'

interface MiddleProps {
  obj: any,
  render: any
}
const MiddleRender: React.FC<MiddleProps> = (props)=> {
  return (
    <div style={{ padding: '20px' }}>
      {props.render(props.obj)}
    </div>
  )
}

export default MiddleRender
