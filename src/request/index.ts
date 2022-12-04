import axios from "axios";

type Fn = (data: FcResponse<any>) => unknown;

interface IAnyObj {
  [index: string]: unknown;
}

interface FcResponse<T> {
  errno: string;
  errNsg: string;
  data: T;
}

// 封装 get 方法
export const get = <T>(
  url: string,
  params: IAnyObj = {},
  clearFn?: Fn
): Promise<[any, FcResponse<T> | undefined]> =>
  new Promise((resolve) => {
    axios
      .get(url, { params })
      .then((res) => {
        let result: FcResponse<T>;
        if (clearFn != undefined) {
          result = clearFn(res.data) as unknown as FcResponse<T>;
        } else {
          result = res.data as FcResponse<T>;
        }
        resolve([null, result as FcResponse<T>]);
      })
      .catch((err) => {
        resolve([err, undefined]);
      });
  });
