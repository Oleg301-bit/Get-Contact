import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
    email: '',
    phone: '',
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
      fName: this.state.fName,
      lName: this.state.lName,
    });
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
          <span>X</span>
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
          <span>X</span>
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
          <span>X</span>
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
          <span>X</span>
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
