import React from 'react'
import './page.less'
import Load from '../load/index';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface PageProps {
  state?: string,
  msg?: string
}

const Failpage:React.FC = ()=> {
  return (
    <div className='pageWrap'>
      <p>state: fail</p>
    </div>
  )
}

const LoadPage:React.FC = (props) => {
  return (
    <div className='pageWrap'>
      <Load {...props}/>
    </div>
  )
}

const Page: React.FC<PageProps> = (props)=> {
  let state = props.state || 'success'
  const Currentpage = state === 'success' ? (
    <div className='pageWrap'>
      {props.children}
    </div>
  ) : (state === 'error' ? <Failpage /> : <LoadPage  {...props} />)
  return (
    <TransitionGroup>
      <CSSTransition key={state} timeout={250} classNames='fade'>
        {Currentpage}
      </CSSTransition>
    </TransitionGroup>
    
  )
}

export default Page