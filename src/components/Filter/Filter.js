import { useDispatch } from 'react-redux';
import { filterS } from 'store/filter/filterSlice';

import css from './Filter.module.css';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilter = e => {
    dispatch(filterS(e.target.value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filterContact">Find contacts by name</label>
      <input
        className={css.filterInput}
        name="filter"
        type="text"
        id="filterContact"
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
