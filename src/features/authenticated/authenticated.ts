import { API_UNPROTECTED } from 'constants/endpoints';
import { APISlice } from 'services/api';
import { setUserAuthenticated } from 'features/profile/profileSlice';

export const authenticatedSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    authenticated: builder.query<string, void>({
      query: () => ({
        url: API_UNPROTECTED.AUTHENTICATED,
        method: 'GET'
      }),
        async onQueryStarted(_, { dispatch, queryFulfilled }) {
          try {
            const { data } = await queryFulfilled;
            dispatch(setUserAuthenticated(data));
          } catch {
            dispatch(setUserAuthenticated(null));
          }
        }
    })
  })
});

export const { useLazyAuthenticatedQuery } = authenticatedSlice;
