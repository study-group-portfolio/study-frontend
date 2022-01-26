import axios, { AxiosInstance } from "axios";

export default function APIClient() {
  const { REACT_APP_API_URL } = process.env;

  const axiosInstance: AxiosInstance = axios.create({
    baseURL: REACT_APP_API_URL,
    responseType: "json",
  });

  return axiosInstance;
}
