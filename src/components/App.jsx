import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import styles from './App.module.css';


export default class App extends Component{

  state = {
    contacts: [],
    filter:'',
  }
  render() {
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={this.addContact} />
        <h2>Contacts</h2>

      </div>
    )
  }
}
