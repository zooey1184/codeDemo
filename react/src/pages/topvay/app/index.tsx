import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from '../views/baseRoute/index';
import './style.less'

const App:React.FC = ()=> (
  <div className='appWrap'>
    <BrowserRouter>
      <BaseRoute></BaseRoute>
    </BrowserRouter>
  </div>
)

export default App