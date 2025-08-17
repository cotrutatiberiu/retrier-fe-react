import { configureStore } from '@reduxjs/toolkit';
import { APISlice } from 'services/api';

export const store = configureStore({
  reducer: {
    [APISlice.reducerPath]: APISlice.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(APISlice.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
