import React, {useEffect, useState} from 'react';
import Test from '@/components/test'
import api from './api'

function App() {
  const [phone, setPhone] = useState('')
  const getData = () => {
    api({
      url: '/tappocket_loan/user/get_user_info',
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
      <p>app js</p>
    </div>
  );
}

export default App;
