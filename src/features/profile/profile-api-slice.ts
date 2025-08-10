import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Profile } from '../../types/Profile';

export const profileSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders(headers) {
      headers.set('x-api-key', 'test');
      return headers;
    }
  }),
  endpoints(builder) {
    return {
      fetchProfile: builder.query<Profile[], void>({
        query() {
          return '/profile';
        }
      })
    };
  }
});

export const { useFetchProfileQuery } = profileSlice;
