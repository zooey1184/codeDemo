import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from './views/baseRoute/index';
import './style.less'
interface Iconfig {
  lang: string,
  pre: number | string
}
declare global {
  interface Window {
    i18nConfig: Iconfig
  }
}
window.i18nConfig = {
  lang: 'cn',
  pre: '86'
}

const App: React.FC = () => (
  <div className='appWrap'>
    <BrowserRouter>
      <BaseRoute></BaseRoute>
    </BrowserRouter>
  </div>
)

export default App