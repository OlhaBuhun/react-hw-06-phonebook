// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { ContactDelitButton, ContactItem } from './Contact.styled';
import { deleteContacts } from 'components/redux/contactsSlice';
// import { deleteContacts } from 'components/redux/contactsSlice';

export const Contact = contact => {
  // console.log(contact.contact.id);
  // console.log(contact);
  const dispatch = useDispatch();
  // console.log(dispatch);
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
