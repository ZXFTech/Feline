export const getCache = (key: string) => {
  return JSON.parse(localStorage.getItem(key));
};

export const setCache = (key: string, value: any) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
