import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = null;
      state.token = '';
      state.isLoggedIn = false;
    });
    
  },
});

export const authReducer = authSlice.reducer;