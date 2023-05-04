// import { createStore } from 'redux';

// const initialState = { count: 1, step: 1 };

// const countReducer = (state = initialState, action) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

// export const store = createStore(
//   countReducer,
//   initialState,
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// );

import { configureStore } from '@reduxjs/toolkit';

import { contactsReduce } from './ContactSlice';
// import { createStore } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, contactsReduce);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
