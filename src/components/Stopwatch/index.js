import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {seconds: 0}

  increaseSec = () => {
    this.setState(prev => ({seconds: prev.seconds + 1}))
  }

  startTimer = () => {
    this.timerId = setInterval(this.increaseSec, 1000)
  }

  stopTimer = () => {
    clearInterval(this.timerId)
  }

  restartTimer = () => {
    this.stopTimer()
    this.setState({seconds: 0})
  }

  render() {
    const {seconds} = this.state
    const minute = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)

    const getMinute = minute < 10 ? `0${minute}` : minute
    const getsec = sec < 10 ? `0${sec}` : sec

    return (
      <div className="bgContainer d-flex flex-column align-items-center align-items-md-start pt-5 p-md-5">
        <h1 className="heading">Stopwatch</h1>
        <div className="card bg-light p-5 d-flex flex-column align-items-center mt-5 rounded">
          <div className="d-flex align-items-center">
            <img
              className="clockImage "
              alt="stopwatch"
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png "
            />
            <h1 className="m-3">Timer</h1>
          </div>
          <h1 className="heading">
            {getMinute}:{getsec}
          </h1>
          <div className="d-flex">
            <button
              type="button"
              onClick={this.startTimer}
              className="btn btn-success mr-2"
            >
              Start
            </button>
            <button
              type="button"
              onClick={this.stopTimer}
              className="btn btn-danger mr-2"
            >
              Stop
            </button>
            <button
              type="button"
              onClick={this.restartTimer}
              className="btn btn-warning mr-2"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
