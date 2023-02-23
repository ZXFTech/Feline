import axios, { AxiosRequestConfig } from "axios";

import { handleError, handleResponse } from "./interceptors";

const felineApi = axios.create({
  baseURL: "/",
});

felineApi.interceptors.request.use((config: AxiosRequestConfig) => {
  return config;
});

felineApi.interceptors.response.use(handleResponse, handleError);

// get 封装
export const get = (url: string, params: any) => {
  return felineApi.get(url, {
    params,
  });
};

// post 封装
export const post = (url: string, data: any) => {
  return felineApi.post(url, {
    data,
  });
};

export default felineApi;
