import { register, login, logOut, refreshUser } from './auth-operations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: null, email: null, password: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: '',
};

const handlePending = state => {
  state.isLoading = true;
  state.error = '';
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleLogOutFulfilled = state => {
  state.user = { name: null, email: null, password: null };
  state.token = null;
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = '';
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isLoading = false;
  state.error = '';
};

const handleRegected = (state, { payload }) => {
  state.isLoggedIn = false;
  state.isLoading = false;
  state.error = payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilled)
      .addCase(login.fulfilled, handleFulfilled)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
      .addMatcher(({ type }) => type.endsWith('/rejected'), handleRegected);
  },
});

export const authReducer = authSlice.reducer;
