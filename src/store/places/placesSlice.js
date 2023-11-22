import { createSlice } from '@reduxjs/toolkit';

// import {
//   registerUser,
//   loginUser,
//   logoutUser,
// } from 'redux/auth/operations';

const placesSlice = createSlice({
  name: 'places',
  initialState: {
      list: [],
      isVisited: "all"
  },
  extraReducers: builder => {
    
  },
});

export const placesReducer =  placesSlice.reducer;