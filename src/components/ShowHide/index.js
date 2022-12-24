import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {for1: {logic1: false}, for2: {logic2: false}}

  showorhide1 = () => {
    this.setState(prevState => ({for1: {logic1: !prevState.for1.logic1}}))
  }

  showorhide2 = () => {
    this.setState(prevState => ({for2: {logic2: !prevState.for2.logic2}}))
  }

  render() {
    const {for1, for2} = this.state
    const {logic1} = for1
    const {logic2} = for2
    let ele

    if (logic1) {
      ele = <p className="bgcolor">Joe</p>
    } else {
      ele = null
    }
    let ele2
    if (logic2) {
      ele2 = <p className="bgcolor">Jonas</p>
    } else {
      ele2 = null
    }
    console.log(ele)
    return (
      <div className="divcon">
        <h1>Show/Hide</h1>
        <div className="subdiv">
          <button className="btnn" type="button" onClick={this.showorhide1}>
            Show/Hide Firstname
          </button>
          <button className="btnn" type="button" onClick={this.showorhide2}>
            Show/Hide Lastname
          </button>
        </div>
        <div className="subdiv">
          <div className="div1">{ele}</div>
          <div className="div1">{ele2}</div>
        </div>
      </div>
    )
  }
}

export default ShowHide
