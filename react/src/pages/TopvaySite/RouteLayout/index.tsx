import { Route, NavLink, Switch, withRouter } from 'react-router-dom'
import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import HomePage from '../HomePage/index';
import AboutPage from '../AboutPage/index';
import './style.less'
import logo from '../imgs/logo.png'
import  '@/common/css/transition.less'

const RouteWay = withRouter(({ location }) => {
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={500}
        classNames={'fade'}
        key={location.pathname}
      >
        <Switch>
          <Route cache  path="/" exact component={HomePage} />
          <Route cache path="/about" exact component={AboutPage} />
          <Route component={() => <h1>页面没找到</h1>} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
});


const BaseRoute:React.FC = ()=> {
  return (
    <div>
      <header className='f_flex f_j_c f_a_c'>
        <nav className='navPanel f_flex f_a_c f_j_sb'>
          <div className='f_flex f_a_c'>
            <img src={logo} alt=""/>
            <h3 style={{marginLeft: '10px', fontSize: '20px'}}>TopVay</h3>
          </div>
          <ul>
            <li><NavLink exact activeClassName='activeNav' to="/">Trang chủ</NavLink></li>
            <li><NavLink exact activeClassName='activeNav' to="/about">Trung tâm hỗ trợ</NavLink></li>
          </ul>
        </nav >
      </header>
      <div className="container">
        <RouteWay/>
      </div>
    </div>
  )
}

export default BaseRoute
