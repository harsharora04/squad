import axios from "axios";

export const ClientApi = axios.create({
  baseURL: "https://62b96d25ff109cd1dc91c3cf.mockapi.io/",
  timeout: 5000,
});