import React, {useState, useEffect} from 'react'
import logo from './imgs/icon_logo.png'
import iconPhone from './imgs/icon_phone.png'
import './index.less'
import './../../common/css/flex.less'
import Cell from './../../components/cell'
import api from './api/index'
import plugin from './../../components/plugin'
import Toast from './../../components/toast'
import SelectPane2 from '../../components/multSelect'
import Dialog from './../../components/dialog'
import iconOperate from './imgs/icon_operator.png'

const toast = plugin(Toast, {
  id: 'toast',
  duration: 1500
})
const select = plugin(SelectPane2, {
  id: 'select',
  hide: ()=> select.hide()
})
const dialog = plugin(Dialog, {
  id: 'dialog',
  msg: 'msg dialog'
})
interface IArr {
  text: string|number,
  value: string
}


const Left = (icon:any)=> {
  return (
    <div>
      <img style={{ width: "20px", paddingTop: '5px' }} src={icon} alt=""/>
    </div>
  )
}
const Operator: React.FC = () => {
  const [btnClass, setBtnClass] = useState(['btn', 'btn_dis'])
  const [carrerList, setCarrer] = useState([{}])
  const [carrer, setCarrerItem] = useState('')
  const phoneFn = (e: any) => {
    if (e.value.match(/\d{11}/)) {
      setBtnClass(['btn', 'btn_act'])
    } else {
      setBtnClass(['btn', 'btn_dis'])
    }
  }
  const getData = () => {
    api({
      url: '/carrer',
      type: 'get'
    }).then(res => {
      let data: IArr[] = []
      res.map((i:any) => {
        data.push({
          text: i.label,
          value: i.name
        })
        return i
      })
      setCarrer(data)
    })
  }
  useEffect(()=> {
    getData()
  }, [])
  const goNext = ()=> {
    toast.show({
      msg: 'title',
      style:{
        width: '100%',
        left: '0'
      },
      animate: 'slideDown'
    })
  }
  const pick = ()=> {
    // const list2 = [
    //   { text: 'react', value: '3' },
    //   { text: 'vue', value: '4' }
    // ]
    // const list = [carrerList, list2]
    // select.show({
    //   list: list,
    //   changeLazy: (d:any)=> {
    //     let t = d.pick.item
    //     let str: any = []
    //     t.map((item: IArr) => str.push(item.text))
    //     setCarrerItem(str.join('-'))
    //   }
    // })
    dialog.show({
      title: '提示',
      msg: `hello world react`,
      animate: 'scaleDownHalf',
      btn: [
        {
          text: 'CLOSE',
          fn: ()=> {
            dialog.hide()
          }
        },
        {
          text: 'show',
          style: {
            color: '#d43f33',
            background: '#333'
          },
          fn: () => {
            dialog.hide()
          }
        }
      ]
    })
  }
  return (
    <div className='pageWrap'>
      <img className='logo' src={logo} alt=""/>
      <Cell left={Left(iconPhone)} style={{ padding: '0 15px'}}>
        <input className='input' type="tel" onChange={(e: any) => phoneFn(e.target)}/>
      </Cell>
      <Cell left={Left(iconOperate)} style={{ padding: '0 15px' }} showRight={true}>
        <p style={{width: '200px', height: '100%', lineHeight: '48px'}} onClick={pick}>{carrer}</p>
      </Cell>
      <div style={{padding: '20px 15px'}}>
        <button className={btnClass.join(' ')} onClick={goNext}>下一步</button>
      </div>
    </div>
  )
}

export default Operator
