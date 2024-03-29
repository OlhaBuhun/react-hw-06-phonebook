import { useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { getContacts, getFilter } from 'components/redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterBook = useSelector(getFilter);

  const normalizedFilter = filterBook.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log(visibleContacts);
  return (
    <ContactListStyled>
      {visibleContacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};
