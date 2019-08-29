import React, {useReducer} from 'react'

const reducer = (state:any, action: any) => {
  switch (action.type) {
    case 'up': return { count: state.count + 1 };
    case 'down': return { count: state.count - 1 };
    case 'plus': return {name: state.name+"**"};
    case 'cut': return {name: state.name+"=="}
  }
}
const ReducerDemo:React.FC = () => {
  const [state, dispatch] = useReducer(reducer, {count: 1})
  return (
    <div>
      {(state as any).count}
      {(state as any).name}
      <button onClick={()=> dispatch({type: 'up'})}>+</button>
      <button onClick={() => dispatch({ type: 'down' })}>-</button>
      <button onClick={()=> dispatch({type: 'plus'})}>plus</button>
      <button onClick={()=> dispatch({type: 'cut'})}>cut</button>
    </div>
  )
}

export default ReducerDemo