// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {textInput: ''}

  onChangeOfTextInput = event => {
    this.setState({textInput: event.target.value})
  }

  render() {
    const {textInput} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
          className="image"
        />
        <div>
          <h1 className="heading">
            Calculate the
            <br />
            letters you
            <br /> enter
          </h1>
          <label htmlFor="textInput1" className="label-element">
            Enter the Phrase
          </label>
          <input
            type="text"
            id="textInput1"
            placeholder="Enter the Phrase"
            className="input-element"
            value={textInput}
            onChange={this.onChangeOfTextInput}
          />
          <p className="count">No.of letters: {textInput.length}</p>
        </div>
      </div>
    )
  }
}
export default LettersCalculator
