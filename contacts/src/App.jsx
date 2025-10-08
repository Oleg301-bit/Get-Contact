import { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      {
        id: 1,
        fName: 'Oleg',
        lName: 'Mask',
        email: 'test1@gmail.com',
        phone: '+380 959 15 88',
        isEditing: true,
      },
      {
        id: 2,
        fName: 'John',
        lName: 'Mark',
        email: 'test2@gmail.com',
        phone: '+380 969 15 88',
        isEditing: true,
      },
      {
        id: 3,
        fName: 'Ficus',
        lName: 'Old',
        email: 'test3@gmail.com',
        phone: '+380 979 15 88',
        isEditing: true,
      },
      {
        id: 4,
        fName: 'Oni',
        lName: 'Chan',
        email: 'test4@gmail.com',
        phone: '+380 989 15 88',
        isEditing: true,
      },
    ],
  };
  render() {
    return (
      <>
      <ContactList contacts={this.state.contacts}/>
      <ContactForm/>
      </>
    )
  }
}

export default App;
