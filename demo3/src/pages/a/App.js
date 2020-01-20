import React, { useEffect, useState } from 'react';
import Test from '@/components/test'
import api from './api'
import a from './css/a.less'
console.log(a);
function App() {
  const [phone, setPhone] = useState('')
  const getData = () => {
    api({
      url: '/user/get_user_info',
      type: 'post'
    }).then(res => {
      console.log(res);
      setPhone(res.ret.guest_phone)
    })
  }
  useEffect(()=> {
    getData()
  }, [])
  return (
    <div className="App">
      <Test></Test>
      phone is : {phone}
      <p className={a.t_c}>app js</p>
    </div>
  );
}

export default App;
