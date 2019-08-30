import React, {useState} from 'react'
import './index.less';
import Theme from '../theme';
import StateHook from '../../components/hooks/useState';
import EffectHook from '../../components/hooks/useEffect';

const App: React.FC = () => {
  const [state, setState] = useState(true)
  return (
    <div className="App">
      <header className="App-header">
        Learn React
        <Theme></Theme>
        <StateHook/>
        <button onClick={()=>setState(!state)}>showEffect</button>
        <EffectHook name="hessllo" isShow={state}>
          <div>effectHook children</div>
        </EffectHook>
      </header>
    </div>
  );
}

export default App;
