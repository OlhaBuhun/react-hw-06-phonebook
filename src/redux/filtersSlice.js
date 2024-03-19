import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'contactsfilters',
  initialState: '',
  reducers: {
    getVisibleContacts: {
      reducer(state, action) {
        state.push(action.payload);
      },
    },
  },
});

export const { getVisibleContacts } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
