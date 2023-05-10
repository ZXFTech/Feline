import axios, { AxiosRequestConfig } from "axios";

import {
  handleAuth,
  handleError,
  handleResponse,
  handleResponseToken,
} from "./interceptors";

const felineApi = axios.create({
  baseURL: "http://localhost:9000/api",
});

felineApi.interceptors.request.use((config: AxiosRequestConfig) => {
  // config.headers["Content-Language"] = "zh-CN,en-US";
  // config.headers["Accept-Language"] = "zh-CN,en-US";
  // config.headers["Content-Type"] = "application/json,*/*";
  return config;
});

felineApi.interceptors.request.use(handleAuth);

felineApi.interceptors.response.use(handleResponse, handleError);
felineApi.interceptors.response.use(handleResponseToken);

// get 封装
export const get = (url: string, params: any) => {
  return felineApi.get(url, {
    params,
  });
};

// post 封装
export const post = (url: string, data: any) => {
  return felineApi.post(url, {
    ...data,
  });
};

export default felineApi;
