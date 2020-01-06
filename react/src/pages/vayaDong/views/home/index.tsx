/* eslint-disable */
import React, { useState, useEffect } from "react";
import api from './../../api'
import TopPane from './topPane';
import StartPane from './startPane'
import MiddlePane from './middlePane';
import Load from './../../../../components/load'

const Home: React.FC = ()=> {
  let [info, setInfo] = useState({
    phone: '',
    state: '',
    data: {
      loan_max_amount_desc: '',
      loan_max_amount: '',
      loan_option_desc: '',
      loan_option: [],
      button_words: ''
    }
  })
  let [phone, setPhone] = useState('')
  let [state, setState] = useState('loading')
  let getData = ()=> {
    api({
      url: '/user/get_user_info'
    }).then(res => {
      let userInfo = res.ret.user_loan_info
      setPhone(res.ret.guest_phone)
      setTimeout(() => {
        setState('success')
      }, 200)
      setInfo({
        phone: res.ret.user_base_info.phone,
        state: userInfo.action,
        data: userInfo
      })
    })
  }

  useEffect(() => {
    getData()
  }, [])

  const Middle = () => {
    return info.phone ? <MiddlePane></MiddlePane> : (
      <div style={{width: '92%', margin: '15px auto'}}>
        <StartPane {...info.data}></StartPane>
      </div>
    )
  }

  const Page = ()=> (
    <div>
      <TopPane {...info}></TopPane>
      <Middle></Middle>
      <p style={{ textAlign: 'center', margin: '30px 0' }}>客服热线：{phone}</p>
    </div>
  )

  return (
    state === 'success' ? <Page></Page> : <Load></Load>
  )
}

export default Home
