import axios from '../../api/baseURL';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const setAuthHeader = token => {
//   axios.defaults.headers.common.Authorization = `Bearer ${token}`;
// };
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/register', user);
      // console.log(response);
      // setAuthHeader(response.data.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post('/login', user);
      // setAuthHeader(response.data.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);