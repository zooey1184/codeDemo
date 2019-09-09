import React, { useEffect,useState } from "react";

interface Iobj {
  name: string,
  isShow?: boolean
}
const EffectHook: React.FC<Iobj> = (props)=> {
  const [age, setAge] = useState(20)
  useEffect(()=> {
    console.log('effect');
    return () => {
      // init every time
      console.log('clean')
    }
  }, [age])
  const com = props.isShow ? (
    <div>
      {props.name}
      <button onClick={() => setAge(age + 1)}>+</button>
      {age}
      <button onClick={() => setAge(age - 1)}>-</button>
    </div>
  ) : null
  return com
}

export default EffectHook