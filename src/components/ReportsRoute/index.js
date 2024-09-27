import {Component} from 'react'
import NavBar from '../NavBar'
import './index.css'

const emojisList = [
  {
    id: '380e6284-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-happy.png',
  },
  {
    id: '380e64f0-a454-11ec-b909-0242ac120002',
    emojiName: 'Happy',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-happy.png',
  },
  {
    id: '380e6626-a454-11ec-b909-0242ac120002',
    emojiName: 'Neutral',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-neutral.png',
  },
  {
    id: '380e6748-a454-11ec-b909-0242ac120002',
    emojiName: 'Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-sad.png',
  },
  {
    id: '380e69c8-a454-11ec-b909-0242ac120002',
    emojiName: 'Very Sad',
    emojiUrl:
      'https://assets.ccbp.in/frontend/react-js/monthly-emojis/monthly-emojis-very-sad.png',
  },
]

class ReportsRoute extends Component {
  state = {selectedMonth: emojisList[0].emojiName}

  onChangeMonth = event => {
    this.setState({selectedMonth: event.target.value})
  }

  render() {
    const {selectedMonth} = this.state
    return (
      <>
        <NavBar />
        <div className="r-container">
          <h1 className="head">Overall Emoji Report</h1>
          <ul className="o-container">
            {emojisList.map(each => (
              <li className="e-list">
                <p className="para">{each.emojiName}</p>
                <img src={each.emojiUrl} className="img1" />
                <p className="nums" />
              </li>
            ))}
          </ul>
          <div className="rp-container">
            <p className="para">Monthly Reports</p>
            <select
              className="select"
              value={selectedMonth}
              onChange={this.onChangeMonth}
            >
              {emojisList.map(each => (
                <option>{each.emojiName}</option>
              ))}
            </select>
          </div>
        </div>
      </>
    )
  }
}

export default ReportsRoute
