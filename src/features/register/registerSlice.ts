import { APISlice } from 'services/api';
import type { RegisterPayload } from 'types/Profile';

export const registerSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<void, RegisterPayload>({
      query: (payload) => ({
        url: '/api/auth/register',
        method: 'POST',
        data: payload
      })
    })
  })
});

export const { useRegisterMutation } = registerSlice;
