import React, {useState} from 'react';
import './index.less';
import List from './../list'
import Count from './../count'
import Theme from '../theme';
import Model from '../../components/model/index';
import ReducerDemo from '../useReducer';
import InputRef from '../classC/useRef';

const App: React.FC = () => {
  const [showModel, setModel] = useState(false)
  
  const showModelFn = ()=> {
    console.log(showModel)
    setModel(!showModel)
  }

  const model = showModel ? (
    <Model>
      <div>
        heloo
        <button className='hide_btn' onClick={showModelFn}>hideModel</button>
      </div>
    </Model>
  ) : null
  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <List />
        <Count />
        <Theme></Theme>
        <InputRef></InputRef>
        <ReducerDemo></ReducerDemo>
        <button onClick={showModelFn}>showModel</button>
      </header>
      {model}
      
    </div>
  );
}

export default App;
