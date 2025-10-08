import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = {
    fName: '',
    lName: '',
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
        />
        <input
          type='text'
          name='lName'
          value={this.state.lName}
          placeholder='Last Name'
          onChange={this.onInputChange}

        />
        <button className='set-button'>Save</button>
        <button className='set-button'>Delete</button>
      </form>
    );
  }
}

export default ContactForm;


