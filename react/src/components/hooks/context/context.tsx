import React, { useReducer, createContext} from 'react'
import { defaultState, reducer } from './init'
import FirstComponent from './firstComponent';

export const Context:any = createContext(null)

const Content: React.FC = ()=> {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <Context.Provider value={{ state, dispatch: dispatch }}>
      <FirstComponent></FirstComponent>
    </Context.Provider>
  )
}

export default Content