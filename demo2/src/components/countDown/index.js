import React, {useState,useCallback,useRef} from 'react';

const CountDown = props => {
  const t = props.time || 60
  const startTxt = props.startTxt || '获取验证码'
  const endTxt = props.endTxt || '重新获取'
  const suffix = props.suffix || 's'
  const className = props.className || []
  const style = props.style || {}
  const [time, setTime] = useState(t)
  const [state, setState] = useState('start')
  const ref = useRef(null)

  const start = useCallback(() => {
    if(ref.current) return ;
    ref.current = setInterval(()=> {
      setTime(c => {
        if(c>0) {
          return c = c-1
        } else {
          clearInterval(ref.current)
          setState('end')
          ref.current = null
          return c = 0
        }
      })
    }, 1000)
  }, [])
  const change = ()=> {
    if(state !== 'ing') {
      setTime(t)
      if (props.change && typeof props.change === 'function') {
        props.change()
      }
      if (state === 'start' || state === 'end') {
        setState('ing')
      }
      start()
    }
  }
  const ShowTime = ()=> {
    return (
      <div onClick={()=> change()} className={className.join(' ')} style={style}>
        {state === 'start' ? startTxt : (state === 'end' ? endTxt : time + suffix)}
      </div>
    )
  }
  return (
    <>
      <ShowTime></ShowTime>
    </>
  )
}

export default CountDown