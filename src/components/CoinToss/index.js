// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {toss: 0, heads: 0, tails: 0}

  coinToss = () => {
    const result = Math.floor(Math.random() * 2)
    let heads = 0
    let tails = 0
    if (result === 0) {
      heads += 1
    } else {
      tails += 1
    }
    this.setState(prevState => ({
      toss: prevState.toss + result,
      heads: prevState.heads + heads,
      tails: prevState.tails + tails,
    }))
  }

  render() {
    const {toss, heads, tails} = this.state
    let image
    if (toss === 0) {
      image = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
    } else {
      image = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    }

    return (
      <div className="bg">
        <div className="coin-card">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="coin-img" />
          <button type="button" className="btn" onClick={this.coinToss}>
            Toss Coin
          </button>
          <div className="count-card">
            <p className="count">Total: {heads + tails}</p>
            <p className="count">Heads: {heads}</p>
            <p className="count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
