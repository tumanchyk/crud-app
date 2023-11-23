import { combineReducers, configureStore } from "@reduxjs/toolkit";
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
import storage from 'redux-persist/lib/storage';
import { devToolsEnhancer } from '@redux-devtools/extension';

import { authReducer } from "./auth/authSlice";
import { placesReducer } from "./places/placesSlice";

const enhancer = devToolsEnhancer();

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const reducers = combineReducers({
    auth: persistReducer(persistConfig, authReducer),
    places: placesReducer
});


export const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    ],
  },
  enhancer
);
export const persistor = persistStore(store);
