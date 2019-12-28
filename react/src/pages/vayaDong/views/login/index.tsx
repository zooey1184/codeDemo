/* eslint-disable */
import React, {useState} from 'react';
import Cell from './../../components/cell'
import imgPhone from './../../imgs/icon_phone.png'
import imgLogo from './../../imgs/logo.png'
import CountDown from '../../components/countDown/index';

const Login:React.FC = () => {
  // data
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const pre = window.i18nConfig.pre
  // methods
  const phoneFn = (e:any)=> {
    setPhone(e.target.value)
  }
  const codeFn = (e:any)=> {
    setCode(e.target.value)
  }
  const loginFn = ()=> {
    console.log(phone, code);
  }
  const change = ()=> {
    console.log('change');
  }
  // widget
  const LeftPhone = ()=> (
    <div className='f_flex f_a_c'>
      <img style={{width: '22px'}} src={imgPhone} alt=""/>
      {pre}+
    </div>
  )
  // render
  return (
    <div style={{padding: '20px'}}>
      <img className='mg_c' style={{marginTop: '30px', marginBottom: '30px', width: '120px'}} src={imgLogo} alt=""/>
      <Cell left={<LeftPhone />} width={70}>
        <input
          className='input'
          type="text"
          value={phone}
          onChange={(e: any) => { phoneFn(e) }}
          placeholder='请输入手机号' />
      </Cell>
      <Cell
        width={1}
        showRight={true}
        right={
          <CountDown change={()=> { change() }} />
        }
        rightStyle={{width: '120px', textAlign: 'right'}}>
        <input
          type="text"
          className='input'
          value={code}
          onChange={(e: any) => { codeFn(e) }}
          placeholder='请输入验证码' />
      </Cell>

      <button
        style={{margin: '20px 0'}}
        className='btn primary_btn radius_btn act_btn'
        onClick={loginFn}>Login</button>  
    </div>
  )
}

export default Login
