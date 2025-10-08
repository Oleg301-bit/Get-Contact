import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
    email:'',
    phone:'',
  };
  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <form className='watch-form'>
        <input
          type='text'
          name='fName'
          value={this.state.fName}
          placeholder='First Name'
          onChange={this.onInputChange}
          className='input'
        />
        <input
          type='text'
          name='lName'
          value={this.state.lName}
          placeholder='Last Name'
          onChange={this.onInputChange}
          className='input'
        />
        <input
          type='text'
          name='email'
          value={this.state.email}
          placeholder='Email'
          onChange={this.onInputChange}
          className='input'
        />
        <input
          type='text'
          name='phone'
          value={this.state.phone}
          placeholder='Phone'
          onChange={this.onInputChange}
          className='input'
        />
        <div className='button-container'>
          <button className='set-button'>Save</button>
          <button className='set-button'>Delete</button>
        </div>
      </form>
    );
  }
}

export default ContactForm;
