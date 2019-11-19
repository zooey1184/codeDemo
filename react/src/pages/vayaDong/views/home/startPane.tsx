import React, {useState} from 'react';
import './startStyle.less'
import imgIconCheck from './../../imgs/icon_check_w.png'
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface StartProps {
  loan_max_amount_desc: string,
  loan_max_amount: string,
  loan_option_desc: string,
  loan_option: string[],
  button_words: string
}

interface IButton {
  title: string,
  chilren?: any
}
const GoVerifyButton: React.FC<IButton & RouteComponentProps> = (props) => {
  const { history } = props
  const goNext =  ()=> {
    history.push('/login')
  }
  return (
    <button
      style={{margin: '10px 0'}}
      className='btn primary_btn radius_btn'
      onClick={goNext}>
      {props.title}
      {props.children ? props.children : null}
    </button>
  )
}

const StartPane: React.FC<StartProps> = (props) => {
  const days = props.loan_option
  const desc = props.loan_option_desc
  let [active, setActive] = useState(0)

  const pick = (act:number) => {
    setActive(act)
  }

  const list = days.map((item, index) => (
    <div
      key={index.toString()}
      className={['dayItem', 'f_flex', 'f_a_c', 'f_j_c', active===index ? 'actItem' : null].join(' ')}
      onClick={() => { pick(index) }}>
      {active === index ? <img className='checkImg' src={imgIconCheck} alt="" /> : null}
      {item}
    </div>
  ))
  const dayList = days.length > 0 ? (
    <div>
      <p>{desc}</p>
      <div className='f_flex f_a_c'>
        {list}
      </div>
    </div>
  ) : null
  const ZButton = withRouter(GoVerifyButton)
  return (
    <div className='startPane'>
      <h5 className='topTitle'>{props.loan_max_amount_desc}</h5>
      <h2 className='title'>{props.loan_max_amount}</h2>
      {dayList}
      <ZButton title={props.button_words}></ZButton>
    </div>
  )
}

export default StartPane
