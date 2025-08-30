import { configureStore } from '@reduxjs/toolkit';
import { APISlice } from 'services/api';
import profileReducer from 'features/profile/profileSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    [APISlice.reducerPath]: APISlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(APISlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
