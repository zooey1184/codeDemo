import React from 'react'
import bg from './../../imgs/home1.png'
import iconHelp from './../../imgs/icon_help.png'
import iconRefresh from './../../imgs/icon_refresh1.png'
import iconHeaderDefault from './../../imgs/header_default.png'
import iconHeader from './../../imgs/header.png'
import './topPanel.less'
import counter from '../../mobx/count';
import { action } from 'mobx';

interface HeaderProps {
  action: string,
  phone?: number | string
}

const plus = action(() => {
  console.log('object');
  counter.count += 1
  console.log(counter.count);
})
const Header: React.FC<HeaderProps> =(props)=> {
  return props.action !== 'start' ? (
    <div className='header f_flex f_a_c'>
      <img src={iconHeader} alt=""/>
      <div>
        <h3>welcome,</h3>
        <p>{props.phone}</p>
      </div>
    </div>
  ) : (
    <div className='header f_flex f_a_c'>
      <img src={iconHeaderDefault} alt=""/>
      <div>
        <h3 onClick={plus}>login</h3>
        <p>{counter.count}</p>
      </div>
    </div>
  )
}

const TopPanel: React.FC<HeaderProps> = (props)=> {
  return (
    <div className='_home_topPanel'>
      <img className='bg' src={bg} alt=""/>
      <div className='nav f_flex f_a_c f_j_sb'>
        <div className='f_flex f_a_c'>
          <img src={iconHelp} alt=""/>
          HELP
        </div>
        <div className='f_flex f_a_c'>
          <img src={iconRefresh} alt=""/>
          REFRESH
        </div>
      </div>
      <Header {...props}/>
    </div>
  )
}

export default TopPanel