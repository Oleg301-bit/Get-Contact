import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  };
  /*static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.editingContact) {
      if (
        nextProps.editingContact.fName !== prevState.fName ||
        nextProps.editingContact.lName !== prevState.lName ||
        nextProps.editingContact.email !== prevState.email ||
        nextProps.editingContact.phone !== prevState.phone
      ) {
        return {
          fName: nextProps.editingContact.fName,
          lName: nextProps.editingContact.lName,
          email: nextProps.editingContact.email,
          phone: nextProps.editingContact.phone,
        };
      }
    } else {
      return { fName: '', lName: '', email: '', phone: '' };
    }
      return null;
  }*/

  componentDidUpdate(prevProps) {
    if (this.props.editingContact !== prevProps.editingContact) {
      if (this.props.editingContact) {
        this.setState({
          fName: this.props.editingContact.fName,
          lName: this.props.editingContact.lName,
          email: this.props.editingContact.email,
          phone: this.props.editingContact.phone,
        });
      } else {
        this.setState({ fName: '', lName: '', email: '', phone: '' });
      }
    }
  }
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  clearField = (fieldName) => {
    this.setState({ [fieldName]: '' });
  };
  onFormSubmit = (event) => {
    event.preventDefault();

    const contactData = {
      ...this.props.editingContact,
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
    };
    if (this.props.editingContact) {
      this.props.onUpdate && this.props.onUpdate(contactData);
    } else {
      this.props.onSubmit && this.props.onSubmit(contactData);
      this.setState({
        fName: '',
        lName: '',
        email: '',
        phone: '',
      });
    }
  };
  onClickDelete = () => {
    const { onDelete, editingContact } = this.props;
    onDelete(editingContact.id);
    
  };
  render() {
    return (
      <form className='watch-form' onSubmit={this.onFormSubmit}>
        <div className='align-input-with-btn'>
          <input
            type='text'
            name='fName'
            value={this.state.fName}
            placeholder='First Name'
            onChange={this.onInputChange}
            className='input'
          />
          <span onClick={() => this.clearField('fName')}>X</span>
        </div>
        <div className='align-input-with-btn'>
          <input
            type='text'
            name='lName'
            value={this.state.lName}
            placeholder='Last Name'
            onChange={this.onInputChange}
            className='input'
          />
          <span onClick={() => this.clearField('lName')}>X</span>
        </div>

        <div className='align-input-with-btn'>
          <input
            type='text'
            name='email'
            value={this.state.email}
            placeholder='Email'
            onChange={this.onInputChange}
            className='input'
          />
          <span onClick={() => this.clearField('email')}>X</span>
        </div>

        <div className='align-input-with-btn'>
          <input
            type='text'
            name='phone'
            value={this.state.phone}
            placeholder='Phone'
            onChange={this.onInputChange}
            className='input'
          />
          <span onClick={() => this.clearField('phone')}>X</span>
        </div>

        <div className='button-container'>
          <button className='set-button' type='submit'>
            Save
          </button>
          <button
            type='button'
            className='set-button'
            onClick={this.onClickDelete}
          >
            Delete
          </button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
