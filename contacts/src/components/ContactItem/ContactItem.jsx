import { Component } from 'react'
import './ContactItem.css';


export class ContactItem extends Component {
  render() {
    const {fName,lName} = this.props.contact;
    return (
      <div className='watch-item'>
        <p className='content'>{fName} {lName}</p>
        <span className='delete-btn'>X</span>
      </div>
    )
  }
}

export default ContactItem
