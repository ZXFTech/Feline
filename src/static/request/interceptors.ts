import axios from "axios";

interface IConfig {
  [key: string]: any;
}

const handleRequestHeader = (config: IConfig) => {
  config["xxxx"] = "xxxx";
  return config;
};

const handleAuth = (config: IConfig) => {
  config.header["token"] = localStorage.getItem("token") || "";
  return config;
};

axios.interceptors.request.use((config) => {
  config = handleRequestHeader(config);
  config = handleAuth(config);
  return config;
});
