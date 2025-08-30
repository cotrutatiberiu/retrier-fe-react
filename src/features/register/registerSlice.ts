import { API_UNPROTECTED } from 'constants/endpoints';
import { APISlice } from 'services/api';
import type { RegisterRequestPayload } from 'types/Profile';

export const registerSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<void, RegisterRequestPayload>({
      query: (payload) => ({
        url: API_UNPROTECTED.REGISTER,
        method: 'POST',
        data: payload
      })
    })
  })
});

export const { useRegisterMutation } = registerSlice;
