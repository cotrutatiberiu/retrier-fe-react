import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Profile } from 'types/Profile';

type ProfileState = Profile & {
  accessToken: string | null;
  csrfToken: string | null;
};

const initialState: ProfileState = {
  accessToken: null,
  csrfToken: null,
  firstName: null,
  lastName: null,
  email: null,
  role: null
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    setCsrfToken(state, action: PayloadAction<string>) {
      state.csrfToken = action.payload;
    },
    logout(state) {
      state = initialState;
    },
    setUserAuthenticated(state, action: PayloadAction<string | null>) {
      state.email = action.payload;
    }
  }
});

export const { setAccessToken, setCsrfToken, logout, setUserAuthenticated } = profileSlice.actions;
export default profileSlice.reducer;
