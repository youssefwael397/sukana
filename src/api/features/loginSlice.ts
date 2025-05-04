import { createSlice } from '@reduxjs/toolkit';

interface LoginState {
  isModalOpen: boolean;
}

const initialState: LoginState = {
  isModalOpen: false,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    openModal(state: LoginState) {
      state.isModalOpen = true;
    },
    closeModal(state: LoginState) {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = loginSlice.actions;
export default loginSlice.reducer;
