import { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';



export class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((contact) => {
          return (<ContactItem key={contact.id} contact={contact} />);
        })}
        <button>New</button>
      </div>
    );
  }
}

export default ContactList;
