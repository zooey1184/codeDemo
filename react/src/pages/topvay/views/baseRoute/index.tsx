import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from '../home/index';
import Login from '../login/index';

const RouterChild = withRouter((location)=> {
  console.log(location);
  return (
    <Switch>
      <Route path='/' exact  component={Home}></Route>
      <Route path='/login' exact component={Login}></Route>
    </Switch>
  )
})

const BaseRoute:React.FC = ()=> {
  return <RouterChild />
}

export default BaseRoute