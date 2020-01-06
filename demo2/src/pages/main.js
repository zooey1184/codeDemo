import React from "react";
import plugin from './../components/plugin'
import Dialog from './../components/dialog'

const dialog = plugin(Dialog, {
  id: 'dialog'
})

const showDialog = ()=> {
  dialog.show({
    msg: 'this is show dialog',
    title: '提示',
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
const Main = ()=> {
  return (
    <div>
      this is show main entry
      <div onClick={()=> showDialog()}>
        dialog test
      </div>
    </div>
  )
}

export default Main