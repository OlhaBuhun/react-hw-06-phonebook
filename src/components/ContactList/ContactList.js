import { useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { getContacts } from 'components/redux/selectors';
import { Contact } from 'components/Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  // console.log(contacts);
  return (
    <ContactListStyled>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactListStyled>
  );
};
