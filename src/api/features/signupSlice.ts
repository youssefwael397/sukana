import { createSlice } from '@reduxjs/toolkit';

interface SignupState {
  isModalOpen: boolean;
}

const initialState: SignupState = {
  isModalOpen: false,
};

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {
    openModal(state: SignupState) {
      state.isModalOpen = true;
    },
    closeModal(state: SignupState) {
      state.isModalOpen = false;
    },
  },
});

export const { openModal, closeModal } = signupSlice.actions;
export default signupSlice.reducer;
