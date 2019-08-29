import React from 'react'
import ReactDOM from 'react-dom';
import './index.less'

const model = document.getElementById('model-root')

class Model extends React.Component {
  el:HTMLElement
  constructor(props:any) {
    super(props)
    this.el = document.createElement('div')
    this.el.className = 'model-wrap'
  }
  componentDidMount() {
    (model as HTMLElement).appendChild(this.el)
  }
  componentWillUnmount() {
    (model as HTMLElement).removeChild(this.el)
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el
    )
  }
}

export default Model