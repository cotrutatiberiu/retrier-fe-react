import { API_UNPROTECTED } from 'constants/endpoints';
import { APISlice } from 'services/api';

export const authenticatedSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    authenticated: builder.query<void, void>({
      query: () => ({
        url: API_UNPROTECTED.AUTHENTICATED,
        method: 'GET'
      })
    })
  })
});

export const { useLazyAuthenticatedQuery } = authenticatedSlice;
