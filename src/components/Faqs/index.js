import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props

    return (
      <div className="bg-container">
        <div className="faq-container">
          <h1 className="heading">FAQs</h1>
          <ul className="faqs-list-container">
            {faqsList.map(eachFaq => (
              <FaqItem details={eachFaq} key={eachFaq.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
