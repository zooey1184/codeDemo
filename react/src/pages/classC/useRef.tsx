import React, {useRef} from 'react'

const InputRef: React.FC = ()=> {
  const inp = useRef<HTMLInputElement>(null)
  const change = ()=> {
    (inp.current as HTMLInputElement).focus()
    console.log(console.log((inp.current as HTMLInputElement).getBoundingClientRect()))
  }
  return (
    <div>
      <input type="text" ref={inp}/>
      <button onClick={change}>change Value</button>
    </div>
  )
}
export default InputRef
