import axios, { AxiosError } from "axios";

import { SPECIAL_VALUE } from "utils/constants";

/**
 * Feel free to modify this ErrorResponse
 */
export interface ErrorResponse {
  code: string;
  status: number;
  message: string;
}

export const requestWithJwt = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: false,
});

export const requestWithoutJwt = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  withCredentials: false,
});

requestWithJwt.interceptors.request.use(async (config) => {
  const token = "token";

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${token || SPECIAL_VALUE.EMPTY_STRING}`,
      ...config.headers,
    },
  };
});

requestWithJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ErrorResponse>) => {
    if (!error.response || !error.response?.data) {
      return Promise.reject({
        code: "Unknown",
        status: 500,
        message: "Server error",
      });
    }
    return Promise.reject({
      ...error.response?.data,
    });
  },
);

requestWithoutJwt.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: AxiosError<ErrorResponse>) => {
    return Promise.reject({
      ...error.response?.data,
    });
  },
);
