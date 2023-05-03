import { get, post } from "@/request";

import { urlUploadImg } from "./url";

export const uploadImg = (img: File) => {
  return post(urlUploadImg, img);
};
