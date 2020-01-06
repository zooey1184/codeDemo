/* eslint-disable */
import React, {useState} from 'react'

interface Down {
  change(): void,
  time?: number,
  startTxt?: string,
  endTxt?: string
}
const CountDown: React.FC<Down> = (props) => {
  // default data
  let initTime = props.time ? props.time : 60
  const initValue = props.startTxt ? props.startTxt : '获取验证码'
  const endTxt = props.endTxt ? props.endTxt : '重新获取'
  // state
  const [t, setT] = useState(initTime)
  const [state, setState] = useState('start')
  // methods
  const downTime = ()=> {
    let time = t
    let timer = setInterval(() => {
      time--
      if (time < 0) {
        clearInterval(timer)
        setState('end')
        setT(initTime)
      } else {
        setT(time)
      }
    }, 1000)
  }
  const changeFn = ()=> {
    setState('change')
    downTime()
    props.change()
  }
  // widget
  const Title = ()=> {
    return (
      <div onClick={() => { changeFn() }}>
        {state === 'start' ? initValue : endTxt}
      </div>
    )
  }
  const ShowTime = ()=> {
    return state === 'change' ? (
      <div> {t}s </div>
    ) : <Title/>
  }
  return (
    <div>
      <ShowTime/>
    </div>
  )
}

export default CountDown
