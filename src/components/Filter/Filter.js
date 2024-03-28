// import { getFilter } from 'components/redux/selectors';
import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/filtersSlice';

export const Filter = () => {
  // const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const filter = event.target.value;
    console.log(filter);
    dispatch(setFilter(filter));
  };
  return (
    <FilterLabel onChange={handleFilter}>
      Find contacts by name
      <FilterInput type="text" required />
    </FilterLabel>
  );
};
