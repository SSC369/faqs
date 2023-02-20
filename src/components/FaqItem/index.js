import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  onShow = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {details} = this.props
    const {questionText, answerText} = details
    const {isClicked} = this.state
    const addBorder = isClicked ? 'down-border' : ''
    return (
      <li className="list-item">
        <div className={`question-button ${addBorder}`}>
          <h1 className="question">{questionText}</h1>
          <button type="button" className="button" onClick={this.onShow}>
            <img
              src={
                isClicked
                  ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
              }
              alt={isClicked ? 'minus' : 'plus'}
              className="icon"
            />
          </button>
        </div>
        {isClicked && <p className="answer">{answerText}</p>}
      </li>
    )
  }
}
export default FaqItem
