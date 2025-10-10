import { Component } from 'react';
import ContactItem from '../ContactItem/ContactItem';

export class ContactList extends Component {
  render() {
    return (
      <div>
        {this.props.contacts.map((contact) => {
          return (
            <ContactItem
              key={contact.id}
              contact={contact}
              onDelete={this.props.onDelete}
              onEdit={this.props.onEdit}
            />
          );
        })}
        <button className='set-button' onClick={this.props.onNew}>
          New
        </button>
      </div>
    );
  }
}

export default ContactList;
