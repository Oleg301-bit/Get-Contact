import { Component } from 'react';
import './ContactForm.css';

export class ContactForm extends Component {
  state = { ...this.props.editingContact };

  static getDerivedStateFromProps(props, state) {
    if (state.id === props.editingContact.id) {
      return {};
    }
    return { ...props.editingContact };
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
    this.props.onSubmit({
      ...this.state,
    });
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
          {this.props.editingContact && (
            <button
              type='button'
              className='set-button'
              onClick={this.onClickDelete}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    );
  }
}

export default ContactForm;
