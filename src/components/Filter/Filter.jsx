import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
