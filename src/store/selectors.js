import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from './filter/selectors';
import { selectContacts } from './user/selectors';

export const selectFilteredUSers = createSelector(
  [selectFilter, selectContacts],
  (inputedFilter, contacts) => {
    if (selectFilter === '') {
      return;
    }
    const filter = inputedFilter.trim().toLowerCase();
    const contact = contacts.filter(users =>
      users.name.trim().toLowerCase().includes(filter)
    );
    return contact;
  }
);
