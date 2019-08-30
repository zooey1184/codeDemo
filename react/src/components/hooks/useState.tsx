import React, {useState} from 'react'

const StateHook:React.FC = ()=> {
  const [name, setName] = useState('zod')
  const changeName = (e: { target: { value: React.SetStateAction<string>; }; })=> {
    setName(e.target.value)
  }
  return (
    <div>
      <input type="text" value={name} onChange={changeName}/>
      {name}
    </div>
  )
}
export default StateHook