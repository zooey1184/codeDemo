import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import './index.less'
import './../../common/css/transition.less'
const SelectPane = props => {
  const [inProp, setInprop] = useState(false)
  useEffect(()=> {
    setTimeout(()=> {
      setInprop(true)
    })
    return () => setInprop(false)
  }, [])
  const pickItem = (e) => {
    if(props.change) {
      setInprop(false)
      props.change()
    }
    console.log(e);
  }
  const List = props.list.map((item, index)=> {
    return (
      <div key={index.toString()} className='__selectItemPane __modelContentItem' onClick={()=> pickItem(item)}>{item.text}</div>
    )
  })
  return (
    <CSSTransition in={inProp} classNames='slideUp' timeout={500}>
      <div className='__selectPane'>
        {List}
      </div>
    </CSSTransition>
  )
}

export default SelectPane