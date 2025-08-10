import { configureStore } from "@reduxjs/toolkit";
import profileReducer from '../features/profile/profile-slice';
import { profileSlice } from "../features/profile/profile-api-slice";

export const store = configureStore({
  reducer: {
    // profile: profileReducer,
    [profileSlice.reducerPath]: profileSlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(profileSlice.middleware);
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>