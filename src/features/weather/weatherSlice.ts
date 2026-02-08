import { API_PROTECTED } from 'constants/endpoints';
import { APISlice } from 'services/api';

export const weatherSlice = APISlice.injectEndpoints({
  endpoints: (builder) => ({
    getWeatherToday: builder.query<string, void>({
      query: () => ({
        url: `${API_PROTECTED.WEATHER}?lon=40&lat=40`,
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

export const { useLazyGetWeatherTodayQuery } = weatherSlice;
