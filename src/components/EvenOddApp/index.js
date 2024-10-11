// Write your code here

import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {heading: 0, text: 'Even'}

  change = () => {
    const randomNum = Math.ceil(Math.random() * 101)
    this.setState(prevState => ({
      heading: prevState.heading + randomNum,
      text: (prevState.heading + randomNum) % 2 === 0 ? 'Even' : 'Odd',
    }))
  }

  render() {
    const {heading, text} = this.state
    return (
      <div className="cont">
        <h1> Count {heading}</h1>
        <p> Count is {text}</p>
        <button className="btn" onClick={this.change}>
          Increment
        </button>
        <p> *Increase By Random number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
