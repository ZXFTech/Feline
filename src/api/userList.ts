import axios from "axios";

import { fakeApiRequest } from "./data";

interface Response {
  data: any[];
  total: number;
  pageNum: number;
  pageSize: number;
}

export const getUserList = (
  pageNum: number,
  pageSize: number,
  sortBy?: string,
  order?: string,
  isError = false
): Promise<Response> => {
  return new Promise((resolve, reject) => {
    if (isError) {
      reject("出错了,请稍后重试！");
    }
    const timer = setTimeout(() => {
      const data = fakeApiRequest();
      resolve({
        data,
        total: 100,
        pageNum,
        pageSize,
      });
      clearTimeout(timer);
    }, 1000);
  });
};
