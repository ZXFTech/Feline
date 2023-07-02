import { getCache } from "@/utils/browser";

export const useUser = () => {
  const user = getCache("username");
};
