import React, {useContext} from 'react'
import { Context } from './context';
import SecondComponent from './secondComponent';

const FirstComponent: React.FC = ()=> {
  const AppContext:any = useContext(Context)
  return (
    <div>
      <SecondComponent/>
      <button onClick={()=> AppContext.dispatch({
        type: 'ADD',
      })}>add</button>
      <button onClick={() => AppContext.dispatch({
        type: 'CUT'
      })}>cut</button>
    </div>
  )
}
export default FirstComponent