import React from 'react';
import ContactListItem from './ContactListItem';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

class ContactList extends React.Component {
  render() {
    const { contacts } = this.props;
    return (
      <div className={css.contactList}>
        <ul className={css.list}>
          {contacts.map(({ id, name, number }) => (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onClick={() => this.props.onFilter(id)}
            />
          ))}
        </ul>
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};

export default ContactList;
