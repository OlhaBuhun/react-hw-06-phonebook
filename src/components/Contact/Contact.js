import { useDispatch } from 'react-redux';
import { ContactDelitButton, ContactItem } from './Contact.styled';
import { deleteContacts } from 'components/redux/contactsSlice';

export const Contact = contact => {
  const dispatch = useDispatch();

  const onDeleteContact = () => {
    dispatch(deleteContacts(contact.contact.id));
  };

  return (
    <ContactItem>
      <p>
        {contact.contact.name}: {contact.contact.number}
      </p>
      <ContactDelitButton type="button" onClick={onDeleteContact}>
        Delete
      </ContactDelitButton>
    </ContactItem>
  );
};
