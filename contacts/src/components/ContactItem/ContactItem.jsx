import { Component } from 'react';
import './ContactItem.css';

export class ContactItem extends Component {
  onContactDelete = (event) => {
    event.stopPropagation();
    this.props.onDelete(this.props.contact.id);
  };
  handleEdit = () => {
    this.props.onEdit(this.props.contact);
  }
  render() {
    const { fName, lName} = this.props.contact;
    return (
      <div className='watch-item'>
        <p className='content' onDoubleClick={this.handleEdit}>
          {fName} {lName}
        </p>
     
        
        <span className='delete-btn' onClick={this.onContactDelete}>
          X
        </span>
      </div>
    );
  }
}

export default ContactItem;
