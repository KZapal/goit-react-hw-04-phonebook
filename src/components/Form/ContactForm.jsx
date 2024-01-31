import React from 'react';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';

class ContactForm extends React.Component {
  render() {
    return (
      <form className={css.form} onSubmit={this.props.onSubmit}>
        <input
          className={css.formInput}
          type="text"
          name="name"
          value={this.props.name}
          onChange={this.props.onChange}
          placeholder="Name: full name"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <input
          className={css.formInput}
          type="number"
          name="number"
          value={this.props.number}
          onChange={this.props.onChange}
          placeholder="Phone number: seven digits"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ContactForm;
