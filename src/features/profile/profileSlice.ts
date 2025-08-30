import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from 'types/Profile';

type ProfileState = Profile & {
  accessToken: string | null;
}

const initialState: ProfileState = {
  accessToken: null,
  firstName: null,
  lastName: null,
  email: null,
  role: null,
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload
    }
  }
});

export const { setAccessToken } = profileSlice.actions;
export default profileSlice.reducer;