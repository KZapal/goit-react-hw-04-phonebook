import css from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, changeFilter }) => {
  return (
    <div className={css.filter}>
      <input
        className={css.filterInput}
        type="text"
        name="filter"
        value={value}
        onChange={changeFilter}
        placeholder="Find contacts by name"
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;
