import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  };
  componentDidUpdate(prevProps) {
    if (this.props.editingContact !== prevProps.editingContact) {
      if (this.props.editingContact) {
        this.setState({
          fName: this.props.editingContact.fName || '',
          lName: this.props.editingContact.lName || '',
        });
      } else {
        this.setState({ fName: '', lName: '' });
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
    };
    if (this.props.editingContact) {
      this.props.onUpdate && this.props.onUpdate(contactData);
    } else this.props.onSubmit && this.props.onSubmit(contactData);
    this.setState({
      fName: '',
      lName: '',
    });
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
          <span onClick={() => this.clearField('fName')}>X</span>
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
          <span onClick={() => this.clearField('fName')}>X</span>
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
          <span onClick={() => this.clearField('fName')}>X</span>
        </div>

        <div className='button-container'>
          <button className='set-button' type='submit'>
            Save
          </button>
          <button className='set-button'>Delete</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
