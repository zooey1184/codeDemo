import React, {useState} from 'react'

const Count: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button onClick={e => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <button onClick={e => setCount(count - 1)}>-</button>
    </div>
  )
}

export default Count