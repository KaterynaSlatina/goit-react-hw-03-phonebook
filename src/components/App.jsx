import React from 'react';
import { Component } from 'react';
import { FormContact } from './FormContact/FormContact';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    console.log(newContact);
    const { contacts } = this.state;

    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  componentDidMount() {
    console.log(this.componentDidMount);
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter, contacts } = this.state;

    const findContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <>
        <section>
          <h2>Phonebook</h2>
          <FormContact addContact={this.addContact} />
          <h2>Contacts list</h2>
          <ContactList
            contacts={findContacts}
            deleteContact={this.deleteContact}
          />
          <Filter changeFilter={this.changeFilter} filter={filter} />
        </section>
      </>
    );
  }
}
