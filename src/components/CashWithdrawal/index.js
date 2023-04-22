import './index.css'
import {Component} from 'react'
import Button from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  withdrawStatus = value => {
    this.setState(prevStatus => ({amount: prevStatus.amount - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-container">
            <div className="profile">S</div>
            <h1 className="name">Sarah Williams</h1>
          </div>
          <div className="bal-container">
            <p className="para">Your Balance</p>
            <div>
              <p className="span">{amount}</p>
              <p className="para2">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="span">Withdraw</p>
            <p className="para">CHOOSE SUM (IN RUPEES)</p>
            <ul className="ul-container">
              {denominationsList.map(each => (
                <Button
                  buttonDetails={each}
                  key={each.id}
                  withdrawStatus={this.withdrawStatus}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
