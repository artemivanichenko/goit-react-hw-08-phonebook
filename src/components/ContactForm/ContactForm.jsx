import PropTypes from 'prop-types';
import { ContactInput } from 'components/ContactInput/ContactInput';
import { StyledBtnForm, StyledForm } from './ContactForm.styled';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <>
        <StyledForm onSubmit={this.handleSubmit}>
          <ContactInput
            type="text"
            name="name"
            value={this.state.name}
            title="Name"
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <br />
          <ContactInput
            type="number"
            name="number"
            value={this.state.number}
            title="Number"
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          />
          <br />
          <StyledBtnForm type="submit">Add Contact</StyledBtnForm>
        </StyledForm>
        ;
      </>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
