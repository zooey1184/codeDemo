import plugin from './../components/plugin'
import Dialog from './../components/dialog'
import Toast from './../components/toast'
import SelectPane from './../components/selectPane'

const dialog = plugin(Dialog, {
  id: 'dialog'
})
const toast = plugin(Toast, {
  id: 'toast',
  className: ['__C-Toast-top'],
  duration: 1500
})
const select = plugin(SelectPane, {
  id: 'select',
  style: {
    textAlign: 'center'
  },
  hide: ()=> {
    select.hide()
  }
})

export {
  dialog,
  toast,
  select
}