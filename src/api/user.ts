import { post } from "@/request";
import { urlLogin, urlRegister } from "./url";
import { privateEncrypt } from "crypto";
import { FUser } from "@/types/user";
import { decrypt, encrypt } from "@/utils/encode";

const code = "test";

export const login = (username: string, password: string) => {
  const encodePassword = encrypt(code, password);
  return post(urlLogin, { username, password: encodePassword });
};

export const register = (user: FUser) => {
  const encodePassword = encrypt(code, user.password);
  return post(urlRegister, { ...user, password: encodePassword });
};
