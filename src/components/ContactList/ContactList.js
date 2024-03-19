import { ContactListStyled } from './ContactList.styled';
import Contact from 'components/Contact/Conctact';

const contacts = [];

export const ContactList = () => (
  <ContactListStyled>
    {contacts.map(({ id, name, number }) => (
      <Contact
        key={id}
        id={id}
        name={name}
        number={number}
        // onDeleteContact={() => onDeleteContact(id)}
      />
    ))}
  </ContactListStyled>
);
