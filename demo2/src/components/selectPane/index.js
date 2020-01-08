import React, {useState, useEffect, useRef} from 'react'
import { CSSTransition } from 'react-transition-group'
import './style.scss'
import './../../common/css/transition.scss'
const cssPre = '__C-Select'
const cssPane = `${cssPre}-Pane`
const cssHead = `${cssPre}-Pane-Header`

const SelectPane = props => {
  const [inProp, setInprop] = useState(false)
  const [selectList, setList] = useState([])
  const [selectIndex, setIndex] = useState([])
  const [act, setAct] = useState(0)
  const [active, setActive] = useState(0) // 只是为了渲染最后一个
  const ref = useRef()
  // 进入动画
  useEffect(()=> {
    const pid = ref.current.parentElement.id
    const idname = `before${pid}HideFn`
    setTimeout(()=> {
      setInprop(true)
      window[idname] = function () {
        setInprop(false)
      }
    })
    return () => {
      setInprop(false)
      setTimeout(() => {
        window[idname] = undefined
      }, 300)
    }
  }, [])
  const len = props.list.length
  // 回调 返回数据格式
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
  // 点击选择某项 props.change =》 回调
  const pickItem = (e, obj) => {
    let arr = selectList
    let arrIndex = selectIndex
    arr[act] = e
    arrIndex[act] = obj.kk
    setList(arr)
    setIndex(arrIndex)
    if(props.change) {
      if(active<=len-1) {
        let data = dealData(obj)
        props.change(data, ()=> {
          setActive(t => t + 1)
          if (act < len - 1) {
            setAct(t => t + 1)
          } else {
            hide()
          }
        })
      }
    } else if (props.changeLazy) {
      if (active <= len - 1) {
        setActive(t => t + 1)
      }
      if (act < len - 1) {
        setAct(t => t + 1)
      } else {
        let data = dealData(obj)
        props.changeLazy(data)
        hide()
      }
    } else {
      console.warn('必须要有change 或 changeLazy 方法')
    }
  }
  // 展示列表
  const List = props.list.map((item, index)=> {
    const style = props.style || {}
    const classNames = [`${cssPane}-Content`, ...props.className] || [`${cssPane}-Content`]
    return (
      <div
        className={classNames.join(' ')}
        key={index.toString()}
        style={{
          left: act===index ? '0' : (act > index ? "-20%" : "100%"),
          transform: act > index ? "scale(0.8)" : "scale(1)",
          ...style
        }}>
        {
          item.map((ii, kk) => {
            return (
              <div
                className={`${cssPane}-Item`}
                onClick={()=> pickItem(ii, {item, index, ii, kk})}
                key={kk.toString()}>
                {ii.text}
              </div>
            )
          })
        }
      </div>
    )
  })
  // 列表头 =》点击触发返回上一项选择
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
  // 列表头数据 =》 选择后展示的数据
  const HeaderTxt = selectList.map((item,index) => {
    return (
      <span
        className={`${cssHead}-TxtItem`}
        onClick={()=> chooseFn(item, index)}
        key={index.toString()}>
        {item.text}
      </span>
    )
  })
  // 点击列表头 的按钮
  const actionFn = ()=> {
    if(props.actionFn) {
      props.actionFn(()=> {
        hide()
      })
    } else {
      hide()
    }
  }
  return (
    <CSSTransition  in={inProp} classNames='fade' timeout={300}>
      <div className={`${cssPre}`} ref={ref}>
        <CSSTransition in={inProp} classNames='slideUp' timeout={400}>
          <div className={`${cssPane}`}>
            <div className={`${cssHead} f_flex f_a_c`}>
              { HeaderTxt }
              <button className={`${cssHead}-Btn`} onClick={actionFn}>{props.action || 'Cancle'}</button>
            </div>
            {List}
          </div>
        </CSSTransition>
      </div>
    </CSSTransition>
  )
}

export default SelectPane