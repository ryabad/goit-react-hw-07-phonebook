import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'store/user/userSlice';

import Notiflix from 'notiflix';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.user.user);
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const deletingContact = id => {
    const deletedContact = contacts.find(el => el.id === id);
    dispatch(deleteContact(id));
    Notiflix.Notify.info(`${deletedContact.name} was deleted!`);
  };
  return (
    <ul>
      {filteredContacts.map(el => (
        <li className={css.item} key={el.id}>
          <p>
            {el.name}: {el.number}
          </p>
          <button
            onClick={() => deletingContact(el.id)}
            className={css.deleteBtn}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
