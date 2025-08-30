import { APISlice } from 'services/api';
import type { LoginRequestPayload, LoginResponsePayload } from 'types/Profile';
import { API_UNPROTECTED } from 'constants/endpoints';

export const loginSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponsePayload, LoginRequestPayload>({
      query: (payload) => ({
        url: API_UNPROTECTED.LOGIN,
        method: 'POST',
        data: payload
      })
    })
  })
});

export const { useLoginMutation } = loginSlice;
