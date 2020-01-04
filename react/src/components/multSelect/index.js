import React, {useState, useEffect} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.less'
import './../../common/css/transition.less'
const MultSelect = props => {
  const [inProp, setInprop] = useState(false)
  const [selectList, setList] = useState([])
  const [selectIndex, setIndex] = useState([])
  const [act, setAct] = useState(0)
  const [active, setActive] = useState(0) // 只是为了渲染最后一个
  useEffect(()=> {
    setTimeout(()=> {
      setInprop(true)
    })
    return () => setInprop(false)
  }, [])
  const len = props.list.length
  const dealData = obj => {
    let {item, index, ii, kk} = obj
    let data = {
      target: {
        item,
        index
      },
      current: {
        item: ii,
        index: kk
      },
      pick: {
        item: selectList,
        index: selectIndex
      }
    }
    return data
  }
  const hide = ()=> {
    setInprop(false)
    if (props.hide) {
      props.hide()
    }
  }
  let arr = selectList
  let arrIndex = selectIndex
  const pickItem = (e, obj) => {
    if(props.change) {
      arr[act] = e
      arrIndex[act] = obj.kk
      setList(arr)
      setIndex(arrIndex)
      if(active<=len-1) {
        setActive(t=>t+1)
        let data = dealData(obj)
        props.change(data)
      }
      if(act < len-1) {
        setAct(t => t + 1)
      } else {
        setTimeout(() => {
          hide()
        })
      }
    }
  }
  const List = props.list.map((item, index)=> {
    return (
      <div className='__selectContent' key={index.toString()} style={{
          left: act===index ? '0' : (act > index ? "-20%" : "100%"),
          transform: act > index ? "scale(0.8)" : "scale(1)"
        }}>
        {
          item.map((ii, kk) => {
            return (
              <div className='__selectItemPane' onClick={()=> pickItem(ii, {item, index, ii, kk})} key={kk.toString()}>{ii.text}</div>
            )
          })
        }
      </div>
    )
  })
  const chooseFn = (item, index)=> {
    let arr = selectList
    let arrIndex = selectIndex
    const length = arr.length
    arr.splice(index, length-index)
    arrIndex.splice(index, length-index)
    setList(arr)
    setIndex(arrIndex)
    setAct(index)
    setActive(index)
  }
  const HeaderTxt = selectList.map((item,index) => {
    return (
      <span className='__selectTxtItem' onClick={()=> chooseFn(item, index)} key={index.toString()}>{item.text}</span>
    )
  })
  return (
    <CSSTransition in={inProp} classNames='slideUp' timeout={500}>
      <div className='__selectPane'>
        <div className='__selectHeader f_flex f_a_c'>
          { HeaderTxt }
          <button className='__headerBtn' onClick={hide}>cancle</button>
        </div>
        {List}
      </div>
    </CSSTransition>
  )
}

export default MultSelect