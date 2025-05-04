import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
}

const loadLoggedIn = () => {
  return localStorage.getItem('isLoggedIn') ? true : false;
};

const initialState: AuthState = {
  isLoggedIn: loadLoggedIn(),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoggedIn(state: AuthState) {
      state.isLoggedIn = true;
      localStorage.setItem('isLoggedIn', state.isLoggedIn.toString());
    },
    LogOut(state: AuthState) {
      state.isLoggedIn = false;
      localStorage.removeItem('isLoggedIn');
    },
  },
});

export const { setLoggedIn, LogOut } = authSlice.actions;
export default authSlice.reducer;
