import { Form, FormButton, FormInput, FormLabel } from './ContactForm.styled';

export const ContactForm = () => {
  return (
    <Form>
      <FormLabel htmlFor="name">
        Name
        <FormInput type="text" name="name" value={name} required />
      </FormLabel>
      <FormLabel htmlFor="name">
        Number
        <FormInput
          type="tel"
          name="number"
          // value={number}
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </Form>
  );
};
