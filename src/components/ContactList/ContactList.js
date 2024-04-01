import { useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { getContacts, getFilter } from 'components/Contact/redux/selectors';
import { Contact } from 'components/Contact/Contact';
// import { getContacts } from 'components/Contact/redux/contactsSlice';

export const ContactList = () => {
  const contactsBook = useSelector(getContacts);
  const filterBook = useSelector(getFilter);

  const normalizedFilter = filterBook.toLowerCase();

  const visibleContacts = contactsBook.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};
