import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'contactsFilters',
  initialState: '',
  reducers: {
    setFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
