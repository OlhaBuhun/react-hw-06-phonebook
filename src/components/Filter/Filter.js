import { FilterInput, FilterLabel } from './Filter.styled';

export const Filter = () => (
  <FilterLabel>
    Find contacts by name
    <FilterInput type="text" required />
  </FilterLabel>
);
