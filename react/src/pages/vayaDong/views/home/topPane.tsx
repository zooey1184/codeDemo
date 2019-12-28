/* eslint-disable */
import React from 'react'
import imgUnloginTop from './../../imgs/home_unlogin.png'
import imgLoginTop from './../../imgs/home1.png'
import imgHeader from './../../imgs/header.png'
import imgHelp from './../../imgs/icon_help.png'
import imgRefresh from './../../imgs/icon_refresh.png'
import './topStyle.less'

interface TopProp {
  state: string,
  phone: string | number,
  data?: any
}
const TopPane: React.FC<TopProp> = (props) => {
  return props.state === 'start' ? (
    <UnloginTop {...props}></UnloginTop>
  ) : (
    <LoginTop></LoginTop>
  )
}

const LoginTop: React.FC = (props:any) => (
  <div className='topPane'>
    <img style={{width: '100%'}} src={imgLoginTop} alt=""/>
    <div className='helpImg f_flex f_a_c f_j_sb'>
      <div className='f_flex f_a_c'>
        <img className='iconImg' src={imgHelp} alt=""/>
        <p>Help</p>
      </div>
      <div className='f_flex f_a_c'>
        <img className='iconImg' src={imgRefresh} alt=""/>
        <p>Refresh</p>
      </div>
    </div>
    <div className='headerWrap f_flex f_a_c'>
      <div>
        <img className='header' src={imgHeader} alt=""/>
      </div>
      <div>
        <h3>welcome</h3>
        {props.phone}
      </div>
    </div>
  </div>
)

const UnloginTop: React.FC = () => (
  <div>
    <img style={{ width: '100%' }} src={imgUnloginTop} alt=""/>
  </div>
)

export default TopPane
