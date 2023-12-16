import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import css from './App.module.css';

const App = () => {
  return (
    <div className={css.container}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm />

      <h2 className={css.contacts}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
