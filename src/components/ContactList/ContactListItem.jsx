import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ name, number, onClick }) => {
  return (
    <li className={css.item}>
      <div className={css.itemIn}>
        <span>
          {name}: {number}
        </span>
        <button onClick={onClick} className={css.btn}>
          Delete
        </button>
      </div>
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onClick: PropTypes.func,
};

export default ContactListItem;
