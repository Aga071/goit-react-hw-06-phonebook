import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/reducer/contactsSlice';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handlerChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handlerSubmit = event => {
    event.preventDefault();
    dispatch(addContact(name, number));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handlerSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handlerChange}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handlerChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
