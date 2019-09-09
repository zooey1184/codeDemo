import React from 'react'
import './loginPanel.less'

interface LoginProps {
  loan_max_amount: string,
  button_words: string,
  loan_max_amount_desc?:string
}
const LoginPanel: React.FC<LoginProps> = (props)=> {
  return (
    <div className='_home_loginpanel'>
      <div className='wrap'>
        <h4>{props.loan_max_amount_desc}</h4>
        <h2>{props.loan_max_amount}</h2>
        <button className='mg_c bd_n primary_btn act_btn'>{props.button_words}</button>
      </div>
    </div>
  )
}

export default LoginPanel