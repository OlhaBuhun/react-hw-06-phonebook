import { FilterInput, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filtersSlice';

export const Filter = () => {
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
