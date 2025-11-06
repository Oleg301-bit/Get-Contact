import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  onItemDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };
  handleEdit = (event) => {
    event.stopPropagation();
    this.props.onEdit(this.props.contact);
  };
  render() {
    const { fName, lName } = this.props.contact;
    return (
      <div className='watch-item'>
        <p className='content' onDoubleClick={this.handleEdit}>
          {fName} {lName}
        </p>

        <span className='delete-btn' onClick={this.onItemDelete}>
          X
        </span>
      </div>
    );
  }
}

export default ContactItem;
