import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addContactAction } from 'redux/constants/slice.contacts';
import { addContact } from 'redux/operations';
// import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const { items } = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  // const stateMap = {
  //   name: setName,
  //   number: setNumber,
  // };

  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   stateMap[name](value);
  // };

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const newContactName = evt.target.inputName.value;
    const newContactNumber = evt.target.inputTel.value;

    const newContactOgj = {
      name: newContactName,
      phone: newContactNumber,
    };
    verifyContact(newContactOgj);
    form.reset();
    // setName('');
    // setNumber('');
  };

  const verifyContact = newContactOgj => {
    console.log(newContactOgj);
    const newName = newContactOgj.name;
    const namesArr = items.map(el => el.name.toLocaleLowerCase());
    console.log(namesArr);
    if (!namesArr.includes(newName.toLocaleLowerCase())) {
      dispatch(addContact(newContactOgj));
    } else {
      alert(`${newName} is already in contact.`);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.wrapper}>
        <div>
          <label htmlFor="inputName">Name</label>
          <input
            id="inputName"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            // value={name}
            // onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="inputTel">Number</label>
          <input
            id="inputTel"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={number}
            // onChange={handleChange}
          />
        </div>

        <button type="submit" className={css.button}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
