import React, {useState} from 'react'

interface Title {
  title?: string,
  desc?: string,
  render: any
}
const TestRender: React.FC<Title> = (props)=> {
  const [state, setState] = useState(0)
  return (
    <div>
      {props.render(state)}
      <button onClick={()=> setState(state+1)}>plus</button>
    </div>
  )
}

export default TestRender