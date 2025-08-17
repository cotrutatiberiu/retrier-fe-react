import { APISlice } from 'services/api';
import type { RegisterPayload } from 'types/Profile';

export const profileSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.query<RegisterPayload, void>({
      query: () => ({
        url: 'profile',
        method: 'GET'
      })
    })
  })
});
