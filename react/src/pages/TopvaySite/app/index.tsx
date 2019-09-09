import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import BaseRoute from '../RouteLayout/index';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter basename='/lanjian/application/views/h5/pages/topvaySite'>
        <BaseRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;