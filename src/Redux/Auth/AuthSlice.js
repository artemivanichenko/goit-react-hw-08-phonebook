import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  refreshThunk,
  logOutThunk,
} from './AuthOperations';

const initialState = {
  user: { name: '', email: '' },
  token: null,
  isOnline: false,
  authIsLoading: false,
  isRefreshing: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isOnline = true;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.user = payload.user;
        state.token = payload.token;
        state.isOnline = true;
      })
      .addCase(logOutThunk.fulfilled, (state, { payload }) => {
        state.user = '';
        state.token = '';
        state.isOnline = false;
      })
      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isOnline = true;
        state.isRefreshing = false;
      })
      .addCase(refreshThunk.rejected, (state, { payload }) => {
        state.error = payload;
        state.isRefreshing = false;
      })

      .addMatcher(
        action => action.type.endsWith('/pending'),
        state => {
          state.authIsLoading = true;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/fulfilled'),
        state => {
          state.authIsLoading = false;
        }
      )
      .addMatcher(
        action => action.type.endsWith('/rejected'),
        (state, action) => {
          state.authIsLoading = false;
          state.error = action.payload;
        }
      );
  },
});
export const authReducer = authSlice.reducer;
