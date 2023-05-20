import {
  addContactThunk,
  fetchContactsThunk,
  deleteContactThunk,
} from './operations';
const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const isLoadingTrue = state => {
  state.isLoading = true;
};
const isLoadingFalse = state => {
  state.isLoading = false;
};

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    filterContact: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        console.log(action.payload);
        state.contacts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.contacts.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.splice(index, 1);
      })
      .addMatcher(action => action.type.endsWith('/fulfilled'), isLoadingFalse)
      .addMatcher(action => action.type.endsWith('/pending'), isLoadingTrue)
      .addMatcher(action => action.type.endsWith('/rejected'), isRejected);
  },
});

export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
