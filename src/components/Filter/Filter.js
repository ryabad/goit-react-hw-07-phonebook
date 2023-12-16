import { useDispatch, useSelector } from 'react-redux';
import { filterAction } from 'store/filter/filterSlice';

import css from './Filter.module.css';
import { selectFilter } from 'store/filter/selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = e => {
    dispatch(filterAction(e.target.value));
  };
  return (
    <div className={css.filter}>
      <label htmlFor="filterContact">Find contacts by name</label>
      <input
        className={css.filterInput}
        name="filter"
        type="text"
        id="filterContact"
        value={filter}
        onChange={handleFilter}
      />
    </div>
  );
};

export default Filter;
