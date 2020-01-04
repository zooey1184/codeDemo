import React from 'react'

const BtnItem = props => {
  const len = props.length
  return props.map((item, index) => {
    let style = item.style ? item.style : {}
    return (
      <div
        className='__dialogBtnItem f_flex f_a_c f_j_c'
        style={{
          width: `${Math.ceil(100/len)}%`,
          borderRight: index<(len-1) ? '1px solid #eee' : '0px',
          ...style
        }}
        onClick={()=> {
          item.fn()
        }}
        key={index.toString()}>
        {item.text}
      </div>
    )
  })
}
const BtnGroup = props => {
  return props && props.length > 0 ? (
    <>
      <div style={{height: '35px'}}></div>
      <div className='__dialogBtnGroup f_flex'>
        {BtnItem(props)}
      </div>
    </>
  ) : null
}

export {
  BtnGroup,
  BtnItem
}