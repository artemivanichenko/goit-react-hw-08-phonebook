import { createSlice } from '@reduxjs/toolkit';

const initialStateFilter = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialStateFilter,
  reducers: {
    filterContact: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { filterContact } = filterSlice.actions;
