import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from '../../types/Profile';

type ProfileState = Profile

const initialState: ProfileState = {
  firstName: null,
  lastName: null,
  email: null,
  role: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setFirstName(state) {
      state.firstName = "test"
    },
    seset(state, action: PayloadAction<string>) {
      state.lastName = action.payload;
    }
  }
});

export const { setFirstName } = profileSlice.actions;
export default profileSlice.reducer;