
import { Component } from 'react'

export class ContactItem extends Component {
  render() {
    const {fName,lName} = this.props.contact;
    return (
      <div>
        <p>{fName} {lName}</p>
        <span>X</span>
      </div>
    )
  }
}

export default ContactItem
