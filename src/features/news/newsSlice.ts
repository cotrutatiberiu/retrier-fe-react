import { API_PROTECTED } from 'constants/endpoints';
import { APISlice } from 'services/api';

export const newsSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewsToday: builder.query<string, void>({
      query: () => ({
        url: `${API_PROTECTED.NEWS}?q=Apple&from=2026-01-24&sortBy=popularity`,
        method: 'GET'
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
        } catch {
          console.log('error');
        }
      }
    })
  })
});

export const { useLazyGetNewsTodayQuery } = newsSlice;
