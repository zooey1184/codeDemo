import React, {useContext} from 'react'
import {Context} from './context'

const SecondComponent: React.FC = ()=> {
  const AppContext: any = useContext(Context)
  return (
    <div>
      secondComponent
      <p>***</p>
      <p>{AppContext.state.val}s</p>
    </div>
  )
}
export default SecondComponent