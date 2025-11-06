import { Component } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    editingContact: this.createEmptyContact(),
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
  createEmptyContact() {
    return {
      fName: '',
      lName: '',
      email: '',
      phone: '',
    };
  }
  createNewContact = () => {
    this.setState({ editingContact: this.createEmptyContact() });
  };
  saveContact = (contact) => {
    if (!contact.id) {
      this.createContact(contact);
    } else {
      this.updateContact(contact);
    }
  };

  createContact = (contact) => {
    contact.id = nanoid();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.saveToLocalStorage(contacts);
      return { contacts, editingContact: this.createEmptyContact() };
    });
  };
  saveToLocalStorage = (arrContacts) => {
    localStorage.setItem('contacts', JSON.stringify(arrContacts));
  };

  updateContact = (upContact) => {
    this.setState((state) => {
      const contacts = state.contacts.map((contact) =>
        contact.id === upContact.id ? upContact : contact
      );
      this.saveToLocalStorage(contacts);
      return {
        contacts,
        editingContact: contacts,
      };
    });
  };
  handleEditContact = (contact) => {
    this.setState({ editingContact: contact });
  };
  deleteContact = (id) => {
    this.setState((state) => {
      const contacts = state.contacts.filter((contact) => contact.id !== id);
      this.saveToLocalStorage(contacts);
      return {
        contacts,
        editingContact: this.createEmptyContact(),
      };
    });
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
            onNew={this.createNewContact}
          />
          <ContactForm
            key={this.state.editingContact.id}
            onSubmit={this.saveContact}
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
