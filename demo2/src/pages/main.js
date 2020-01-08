import React from "react";
import { getYear, getMonth, getDay } from './../components/selectPane/date'
import {dialog, toast, select} from './pluginConfig'
import { getAnimal } from './../components/selectPane/dateNong'
import CountDown from './../components/countDown'
let y = 2020
const showDialog = ()=> {
  dialog.show({
    msg: `message`,
    title: '优惠',
    btn: [
      {
        text: '取消',
        fn: ()=> {
          dialog.hide()
        }
      }
    ]
  })
}

const showToast = () => {
  toast.show({
    msg: `${y}是${getAnimal(y)}年`
  })
}

const showSelect = () => {
  let yy = getYear([-30])
  let mm = getMonth()
  let dd = []
  let list = [yy,mm,dd]
  select.show({
    list: list,
    change: (i, next)=> {
      if(i.target.index===1) {
        dd = getDay(i.pick.item[0].value, i.pick.item[1].value)
        list[2] = dd
      }
      if(i.target.index===2) {
        y = i.pick.item[0].value
      }
      next()
    }
  })
}
const Main = ()=> {
  return (
    <div>
      this is show main entry
      <div onClick={()=> showToast()}>
        toast test
      </div>

      <div onClick={()=> showDialog()}>
        dialog test
      </div>

      <div onClick={()=> showSelect()}>
        select test
      </div>
      <CountDown></CountDown>
    </div>
  )
}

export default Main