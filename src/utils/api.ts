import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios from 'axios';
import { API_UNPROTECTED } from 'constants/endpoints';
import { logout, setAccessToken } from 'features/profile/profileSlice';
import { store } from 'store/store';

const baseUrl = 'http://localhost:8080';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  withCredentials: true, // if you need cookies,
  headers: {
    'Content-Type': 'application/json'
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    const state = store.getState();
    const accessToken = state?.profile?.accessToken;
    const csrfToken = state?.profile.csrfToken;
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
    if (csrfToken) config.headers['X-CSRF-TOKEN'] = csrfToken;

    return config;
  },
  (error) => Promise.reject(error)
);

export const axiosBaseQuery =
  (): BaseQueryFn<
    { url: string; method: string; data?: unknown; params?: unknown },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    try {
      if (Object.values(API_UNPROTECTED).includes(url)) {
        const result = await axiosInstance({ url, method, data, params });
        return { data: result.data };
      }

      const result = await axiosInstance({ url, method, data, params });
      return { data: result.data };
    } catch (e: any) {
      if (e.response?.status === 401) {
        try {
          await fetchAccessToken();
          // retry original request
          const retryResult = await axiosInstance({ url, method, data, params });
          return { data: retryResult.data };
        } catch (refreshError) {
          return { error: refreshError };
        }
      }
      return { error: e };
    }
  };

const fetchAccessToken = async () => {
  try {
    const result = await axiosInstance<{ accessToken: string }>({
      url: API_UNPROTECTED.REFRESH_TOKEN,
      method: 'POST'
    });
    if (result?.data.accessToken) {
      store.dispatch(setAccessToken(result?.data.accessToken));
      return ;
    }
    throw new Error('No access token in refresh response');
  } catch (e: any) {
    if (e.response?.status === 403) {
      store.dispatch(logout());
    }
    throw e;
  }
};
