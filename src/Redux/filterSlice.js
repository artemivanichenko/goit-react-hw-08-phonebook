import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (state, action) => {
      console.log(action.payload);
      state = action.payload;
    },
  },
});
export default filterSlice.reducer
export const { filterContact } = filterSlice.actions;