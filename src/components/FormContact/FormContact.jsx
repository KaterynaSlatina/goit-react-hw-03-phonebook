import React from 'react';
import { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './FormContact.module.css';

export class FormContact extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.props.addContact(newContact);

    this.setState({ name: '', id: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.inputId}>
          Name
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </label>

        <label htmlFor={this.inputId}>
          Number
          <input
            type="tel"
            name="number"
            id={this.inputId}
            value={this.state.number}
            onChange={this.handleChange}
            required
          />
        </label>

        <button className={css.btnForm} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
