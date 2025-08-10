import axios from "axios"

const baseUrl = 'http://localhost:8080'

export const API = {
  get: (endpoint: string, params?: { [key: string]: any }) => customFetch(axios.get, endpoint, params),
  post: (endpoint: string, params: { [key: string]: any }) => customFetch(axios.post, endpoint, params),
  put: (endpoint: string, params: { [key: string]: any }) => customFetch(axios.put, endpoint, params),
}
const headers = {
  'Content-Type': 'application/json'
}

// const withParams;

const customFetch = (method: typeof axios.get | typeof axios.post | typeof axios.put, endpoint: string, params?: { [key: string]: any }) => {
  const url = new URL(baseUrl + endpoint);
  switch (method) {
    case axios.get: {
      try {
        axios.get(url.toString(), { headers, params });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const status = error.response?.status;

          if (status === 401) {
            //access token expired
          } else if (status === 403) {
            //logout
          } else if (status === 409) {

          } else {
            console.error(`Error ${status}:`, error.response?.data);
          }
        } else {
          console.error('Unexpected error:', error);
        }
      }

    }
  }
}