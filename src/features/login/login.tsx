import { APISlice } from 'services/api';
import type { RegisterPayload } from 'types/Profile';

export const loginSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<void, RegisterPayload>({
      query: (payload) => ({
        url: '/api/auth/login',
        method: 'POST',
        data: payload
      })
    })
  })
});

export const { useLoginMutation } = loginSlice;
