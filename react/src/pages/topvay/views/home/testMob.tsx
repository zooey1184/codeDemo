import React from 'react'
import { action } from 'mobx';
import counter from '../../mobx/count';

const TestMob: React.FC = ()=> {
  const plus = action(() => {
    counter.count += 1
  })
  return (
    <div>
      <button onClick={plus}>plus</button>
    </div>
  )
}

export default TestMob
