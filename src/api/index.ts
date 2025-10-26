import axios from "axios";

export const api = axios.create({
  baseURL: "https://dummyjson.com",
});

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    return Promise.reject(err);
  }
);
