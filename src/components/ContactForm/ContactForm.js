import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/user/userSlice';
import { nanoid } from 'nanoid';

import Notiflix from 'notiflix';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(state => {
    return state.user.user;
  });

  const dispatch = useDispatch();

  const addingContact = contact => {
    const isExist = contacts.some(el => el.name === contact.name);
    if (isExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    Notiflix.Notify.success(`${newContact.name} has been added!`);
  };

  const handleSubmit = e => {
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    e.preventDefault();
    addingContact({ name, number });
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <div>
        <label htmlFor="inputName"></label>
        <input
          className={css.nameInput}
          name="name"
          type="text"
          id="inputName"
          required
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Name"
        />
      </div>
      <div>
        <label htmlFor="inputPhone"></label>
        <input
          className={css.numberInput}
          name="number"
          type="tel"
          id="inputPhone"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="Number"
        />
      </div>
      <button type="submit" className={css.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
