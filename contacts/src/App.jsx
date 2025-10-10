import { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';

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
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (!contacts) {
      this.setState({
        contacts: [],
      });
    } else {
      this.setState({
        contacts: [...contacts],
      });
    }
  }
  addContact = (contact) => {
    if (contact.id) {
      this.setState((state) => {
        const contacts = state.contacts.map((c) =>
          c.id === contact.id ? contact : c
        );
        this.saveContacts(contacts);
        return { contacts, editingContact: null };
      });
    } else {
      contact.id = nanoid();
      this.setState((state) => {
        const contacts = [...state.contacts, contact];
        this.saveContacts(contacts);
        return { contacts };
      });
    }
  };
  saveContacts = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };
  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };
  updateContact = (upContact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) =>
        contact.id === upContact.id ? upContact : contact
      );
      this.saveContacts(contacts);
      return {
        contacts,
      };
    });
  };
  handleEditContact = (contact) => {
    this.setState({ editingContact: contact });
  };
 
  render() {
    return (
      <div className='set-border'>
        <h1>Contact List</h1>
        <div className='set-form'>
          <ContactList
            contacts={this.state.contacts}
            onDelete={this.deleteContact}
            onEdit={this.handleEditContact}
            onUpdate={this.onUpdate}
          />
          <ContactForm
            onSubmit={this.addContact}
            onUpdate={this.updateContact}
            onDelete={this.deleteContact}
            editingContact={this.state.editingContact}
          />
        </div>
      </div>
    );
  }
}

export default App;
