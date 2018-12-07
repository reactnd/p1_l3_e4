import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    const valueArr =  this.generateValues()
    this.state = {
      numQuestions: 0,
      numCorrect: 0,
      value1: valueArr[0],
      value2: valueArr[1],
      value3: valueArr[2],
      proposedAnswer: valueArr[3],
    }

  }

    generateValues = () => {
      const value1 = Math.floor(Math.random() * 5)
      const value2 = Math.floor(Math.random() * 5)
      const value3 = Math.floor(Math.random() * 5)
      const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3
      return [value1, value2, value3, proposedAnswer]
      }

    newQuestion = () => {
      const valueArr =  this.generateValues()
      this.setState((currentState) => ({
        value1: valueArr[0],
        value2: valueArr[1],
        value3: valueArr[2],
        proposedAnswer: valueArr[3],
      }))
    }

  checkTrue = () => {
    if (this.state.proposedAnswer === this.state.value1 + this.state.value2 + this.state.value3) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1
      }))
    }
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1
    }))
    this.newQuestion()
  }
  checkFalse = () => {
    if (this.state.proposedAnswer !== this.state.value1 + this.state.value2 + this.state.value3) {
      this.setState((currentState) => ({
        numCorrect: currentState.numCorrect + 1
      }))
    }
    this.setState((currentState) => ({
      numQuestions: currentState.numQuestions + 1
    }))
    this.newQuestion()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.checkTrue}>True</button>
          <button onClick={this.checkFalse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
