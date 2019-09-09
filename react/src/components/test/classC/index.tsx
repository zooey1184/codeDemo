import React from 'react'

class Panel extends React.Component {
  rr: React.RefObject<HTMLInputElement>;
  constructor(props:any) {
    super(props)
    this.rr = React.createRef()
    this.forcus = this.forcus.bind(this)
  }
  componentDidMount() {
    console.log('hello');
    console.log((this.rr.current as HTMLInputElement).getBoundingClientRect());
  }
  forcus() {
    (this.rr.current as HTMLInputElement).focus();
  }
  render() {
    return (
      <div>
        <div className="panel">
          <input type="text" ref={this.rr}/>
          <button onClick={this.forcus}>聚焦</button>
          this is panel
        </div>
      </div>
    )
  }
}

export default Panel