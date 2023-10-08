import { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import {
  ButtonSubmit,
  ButtonText,
  ErrorMessageStyled,
  FormStyled,
  InputBox,
} from './Form.styled';

const schema = object().shape({
  name: string()
    .trim()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Invalid name format.'
    )
    .required('This field is required'),
  number: string()
    .trim()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format'
    )
    .required('This field is required'),
});
const initialValues = {
  name: '',
  number: '',
};

export class FormAddContact extends Component {
  handleSubmit = (value, { resetForm }) => {
    this.props.addContact(value);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={this.handleSubmit}
      >
        <FormStyled autoComplete="off">
          <label>
            Name<span>*</span>
            <InputBox>
              <Field
                type="text"
                name="name"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
              />
              <ErrorMessage  component={ErrorMessageStyled} name="name" />
            </InputBox>
          </label>
          <label>
            Number<span>*</span>
            <InputBox>
              <Field
                type="tel"
                name="number"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
              <ErrorMessage component={ErrorMessageStyled}  name="number" />
            </InputBox>
          </label>
          <ButtonSubmit type="submit">
            <ButtonText>Add contact</ButtonText>
          </ButtonSubmit>
        </FormStyled>
      </Formik>
    );
  }
}
