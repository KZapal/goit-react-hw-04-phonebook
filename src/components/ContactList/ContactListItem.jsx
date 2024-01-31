import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, number, onClick }) => {
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactListItem;
