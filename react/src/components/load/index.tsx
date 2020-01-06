/* eslint-disable */
import React from 'react'
import './style.less'
interface LoadProps {
  msg?: string,
  stroke?: string
}

const Load:React.FC<LoadProps> = (props)=> {
  return (
    <div className="loadWrap">
      <div className='loadContent f_flex f_d_c f_a_c f_j_c'>
        <svg className="circular" viewBox="25 25 50 50">
          <circle className="path" cx="50" cy="50" r="20" fill="none"/>
        </svg>
        <p style={{textAlign: 'center'}}>{props.msg ? props.msg : ''}</p>
      </div>
    </div>
  )
}

export default Load