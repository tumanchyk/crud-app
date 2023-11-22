import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  loginUser,
  logoutUser,
} from './authOperations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data;
      // state.token = actions.payload.data.token;
      state.isLoggedIn = true;
      console.log(actions.payload);
    });
    // builder.addCase(registerUser.rejected, (state, action) => {
    //   state.fetchError = action.payload;
    // });
    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.user = actions.payload.data;
      // state.token = actions.payload.data.token;
      state.isLoggedIn = true;
    });
    // builder.addCase(loginUser.rejected, (state, action) => {
    //   state.fetchError = action.payload;
    // });
    builder.addCase(logoutUser.fulfilled, state => {
      state.user = null;
      state.token = '';
      state.isLoggedIn = false;
    });
    
  },
});

export const authReducer = authSlice.reducer;