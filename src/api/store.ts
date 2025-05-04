import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/apiSlice';
import signupReducer from './features/signupSlice';
import loginReducer from './features/loginSlice';
import AuthReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    signup: signupReducer,
    login: loginReducer,
    auth: AuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
