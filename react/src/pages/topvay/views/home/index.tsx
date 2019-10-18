import React, {useState, useEffect} from "react";
import Page from '../../../../components/page/index';
import TopPanel from "./topPanel";
import LoginPanel from './loginPanel';
import {api} from './../../api/fetch'
import MiddleRender from './middleRender';
import MiddlePane from './middlePane';

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


  const MiddleComponent = (() => {
    if (state === 'success') {
      const user_loan_info = (data as unknown as IData).user_loan_info
      const user_base_info = (data as unknown as IData).user_base_info
      let obj = {
        action: user_loan_info.action,
        userInfo: user_loan_info,
        baseInfo: user_base_info,
        phone: user_base_info.phone
      }
      let Content = null
      if(user_loan_info.action!=='start') {
        Content = (
          <MiddleRender obj={obj} render={(a: any) => (
            <MiddlePane {...a.userInfo} />
          )} />
        )
      } else {
        Content = (
          <MiddleRender obj={obj} render={(a: any) => (
            <LoginPanel {...a.userInfo} />
          )} />
        )
      }

      return (
        <>
          <TopPanel {...obj} />
          {Content}
          <p
            style={{ textAlign: 'center', marginTop: '50px' }}
            className='theme_color'>
            客服热线: {(data as unknown as IData).guest_phone}
          </p>
        </>
      )
    }
  })()

  return (
    <Page state={state}>
      <div>
        {MiddleComponent}
      </div>
    </Page>
  )
}

export default Home