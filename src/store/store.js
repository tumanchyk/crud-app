import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
import { placesReducer } from "./places/placesSlice";

const reducers = combineReducers({
    auth: authReducer,
    places: placesReducer
});


export const store = configureStore({
    reducer: reducers,
});