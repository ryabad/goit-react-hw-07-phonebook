import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError } from 'store/user/selectors';
import { addContactAction } from 'store/user/userService';

import { nanoid } from 'nanoid';

import Notiflix from 'notiflix';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const addingContact = contact => {
    if (error) {
      return Notiflix.Notify.failure(`${error}. Please try again later!`);
    }

    const isExist = contacts.some(el => el.name === contact.name);
    if (isExist) {
      Notiflix.Notify.failure(`${contact.name} is already in contacts`);
      return;
    }
    const newContact = {
      ...contact,
      id: nanoid(),
    };
    dispatch(addContactAction(newContact));
    Notiflix.Notify.success(`${newContact.name} has been added!`);
  };

  const handleSubmit = e => {
    const form = e.target;
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    e.preventDefault();
    addingContact({ name, phone });
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
          name="phone"
          type="tel"
          id="inputPhone"
          required
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          placeholder="Phone"
        />
      </div>
      <button type="submit" className={css.addContactBtn}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
