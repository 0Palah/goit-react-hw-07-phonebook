import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectContactsArr } from 'redux/selectors';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const items = useSelector(selectContactsArr);
  const dispatch = useDispatch();

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
  };

  const verifyContact = newContactOgj => {
    const newName = newContactOgj.name;
    const namesArr = items.map(el => el.name.toLocaleLowerCase());
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
