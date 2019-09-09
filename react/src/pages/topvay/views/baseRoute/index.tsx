import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Home from '../home/index';

const RouterChild = withRouter((location)=> {
  return (
    <Switch>
      <Route path='/' exect component={Home}></Route>
    </Switch>
  )
})

const BaseRoute:React.FC = ()=> {
  return <RouterChild />
}

export default BaseRoute