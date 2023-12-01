import toast from 'react-hot-toast';
import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshUser
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    isLoggedIn: false,
    isRefreshing: false
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state) => state);
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.token = actions.payload.token;
      state.isLoggedIn = true;
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.token = null;
      state.isLoggedIn = false;
      toast.error('This user is not registered')
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.token = '';
      state.isLoggedIn = false;
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    });
    
  },
});

export const authReducer = authSlice.reducer;