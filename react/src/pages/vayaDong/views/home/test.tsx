import React from 'react'
import { withRouter, RouteComponentProps} from 'react-router-dom'

interface Base {}
const HomeButton: React.FC<Base & RouteComponentProps> = (props) => {
  const goNext = ()=> {
    console.log(props);
    let {history} = props
    history.push('/login')
  }
  return (
    <div>
      <button onClick={goNext}>go next</button>
    </div>
  )
}
export default withRouter(HomeButton)