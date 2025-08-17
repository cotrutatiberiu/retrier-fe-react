import { createApi } from '@reduxjs/toolkit/query/react';
import { axiosBaseQuery } from 'utils/api';

export const APISlice = createApi({
  reducerPath: 'api',
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({})
});
