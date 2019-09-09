import React, {useState, useMemo} from 'react'

const MemoHook:React.FC = ()=> {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  useMemo(()=> {
    console.log(count);
  }, [count, name])
  return (
    <div>
      useMemo
      {count}
      {name}
      <div onClick={() => setName(name => `${name}88`)}>name</div>
      <div onClick={() => setCount(count => count+1)}>count</div>
    </div>
  )
}
export default MemoHook