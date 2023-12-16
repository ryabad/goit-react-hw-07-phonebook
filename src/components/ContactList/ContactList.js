import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { deleteUserAction, fetchUsersAction } from 'store/user/userService';
import { selectError, selectIsLoading } from 'store/user/selectors';
import { selectFilteredUSers } from 'store/selectors';

import Notiflix from 'notiflix';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredUSers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const deletingContact = id => {
    const deletedContact = contacts.find(el => el.id === id);
    dispatch(deleteUserAction(id));
    Notiflix.Notify.info(`${deletedContact.name} was deleted!`);
  };

  useEffect(() => {
    dispatch(fetchUsersAction());
  }, [dispatch]);

  return (
    <ul>
      {error && (
        <p style={{ color: 'red', fontSize: '25px', textAlign: 'center' }}>
          {error}! Please try again later
        </p>
      )}
      {isLoading && !error && <p>Loading...</p>}
      {contacts.map(el => (
        <li className={css.item} key={el.id}>
          <p>
            {el.name}: {el.phone}
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
