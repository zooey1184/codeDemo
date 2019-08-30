import React, {useReducer} from 'react'

type RedecerAction = | { type: 'up' | 'down' |'plus' | 'cut'}
interface RedecerState {
  count?: number,
  name?: string
}
const reducer = (state: RedecerState, action: RedecerAction): RedecerState => {
  switch (action.type) {
    case 'up': return { count: (state.count ? state.count : 0) + 1 };
    case 'down': return { count: (state.count ? state.count : 0) - 1 };
    case 'plus': return { name: (state.name ? state.name : 'helo')+"**"};
    case 'cut': return { name: (state.name ? state.name : 'helo')+"=="}
  }
}
const ReducerDemo:React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { count: 1, name: 'helo' })
  return (
    <div>
      {(state as RedecerState).count}
      
      <button onClick={()=> dispatch({type: 'up'})}>+</button>
      <button onClick={() => dispatch({ type: 'down' })}>-</button>
      <button onClick={()=> dispatch({type: 'plus'})}>plus</button>
      <button onClick={()=> dispatch({type: 'cut'})}>cut</button>
      {(state as RedecerState).name}
    </div>
  )
}

export default ReducerDemo