import { useDispatch } from 'react-redux';
import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';
import { addContacts } from 'components/redux/contactsSlice';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const createContact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContacts(createContact));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel htmlFor="name">
        Name
        <FormInput type="text" name="name" required />
      </FormLabel>
      <FormLabel htmlFor="name">
        Number
        <FormInput type="tel" name="number" required />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};
