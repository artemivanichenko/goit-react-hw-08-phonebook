import {
  addContactThunk,
  fetchContactsThunk,
  deleteContactThunk,
} from 'Redux/operations';
const { createSlice } = require('@reduxjs/toolkit');
// const { nanoid } = require('nanoid');

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const isLoadingTrue = state => {
  state.contacts.isLoading = true;
};
const isLoadingFalse = state => {
  state.contacts.isLoading = false;
};

const isRejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    // filterContact(state, { payload }) {
    //   state.filter = payload;
    // },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, action) => {
        state.contacts.items = action.payload;
        state.isLoading = false;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.contacts.items.push(action.payload);
        state.isLoading = false;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.contacts.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.contacts.items.splice(index, 1);
      })
      .addMatcher(action => action.type.endsWith('/fulfilled'), isLoadingFalse)
      .addMatcher(action => action.type.endsWith('/pending'), isLoadingTrue)
      .addMatcher(action => action.type.endsWith('/rejected'), isRejected);
  },
});

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContacts: {
//       reducer(state, { payload }) {
//         state.contacts.push(payload);
//       },
//       prepare(payload) {
//         return {
//           payload: { name: payload.name, number: payload.number, id: nanoid() },
//         };
//       },
//     },
//     deleteContact: {
//       reducer(state, { payload }) {
//         const index = state.contacts.findIndex(
//           contact => contact.id === payload
//         );
//         state.contacts.splice(index, 1);
//       },
//     },
//     filterContact(state, { payload }) {
//       state.filter = payload;
//     },
//   },
// });

// export const { filterContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
