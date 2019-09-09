import React, {useState, useEffect} from "react";
import Page from '../../../../components/page/index';
import TopPanel from "./topPanel";
import LoginPanel from './loginPanel';
import {api} from './../../api/fetch'

interface IData {
  [proname: string]: any,
  guest_phone: string
}
const Home:React.FC = ()=> {
  const [state, setState] = useState('load')
  const [data, setData] = useState(null)
  const url = 'http://uat.51bmsh.com/vietnam_loan/user/get_user_info'

  const getData = ()=> {
    api({ url }).then(res=> {
      setData(res.ret)
      setState('success')
    })
  }
  useEffect(()=> {
    getData()
  }, [])

  const Content = state === 'success' ? (
    <>
      <TopPanel state='login' />
      <div style={{ padding: '20px' }}>
        <h3>Topvay</h3>
        <LoginPanel {...(data as unknown as IData).user_loan_info}></LoginPanel>
      </div>
      <p style={{textAlign: 'center', marginTop: '50px'}} className='theme_color'>
        客服热线: {(data as unknown as IData).guest_phone}
      </p>
    </>
  ) : null

  return (
    <Page state={state}>
      <div>
        {Content}
      </div>
    </Page>
  )
}

export default Home