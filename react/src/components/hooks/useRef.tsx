import React, {useRef} from 'react'

const RefHook:React.FC = ()=> {
  const btn = useRef<HTMLButtonElement>(null)
  const getPos = ()=> {
    console.log((btn.current as HTMLButtonElement).getBoundingClientRect())
  }
  return(
    <div>
      <button ref={btn} onClick={getPos}>ref position</button>
    </div>
  )
}
export default RefHook