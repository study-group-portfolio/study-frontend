import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { store } from "store/store";
import jwt_decode from "jwt-decode";
import moment from "moment";
import { getReissueAccessToken } from "./userAPI";
import { editLogin } from "store/login/state";

export interface Token {
  exp: number;
  iat: number;
  id?: number;
  iss: string;
  role: string;
  sub: string;
}

const HTTP: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000,
  withCredentials: false,
  headers: {
    "content-Type": "application/json",
  },
});

HTTP.interceptors.request.use(
  async function (config: AxiosRequestConfig) {
    const { login } = store.getState();

    if (login.isLogin) {
      const decodeAccessToken: Token = jwt_decode(login.accessToken);
      const decodeRefreshToken: Token = jwt_decode(login.refreshToken);

      const currentDate = moment();
      const accessTokenExp = new Date(decodeAccessToken.exp * 1000);
      const refreshTokenExp = new Date(decodeRefreshToken.exp * 1000);

      if (config && config.headers && login.accessToken) {
        config.headers["Authorization"] = `Bearer ${login.accessToken}`;
      }

      if (!currentDate.isBefore(accessTokenExp)) {
        if (currentDate.isBefore(refreshTokenExp)) {
          const {
            data: { accessToken },
          } = await getReissueAccessToken();
          store.dispatch(editLogin(accessToken, login.refreshToken));
          if (config && config.headers && login.accessToken) {
            config.headers["Authorization"] = `Bearer ${accessToken}`;
          }
        } else {
          window.location.href = "/users/login";
        }
      }
    }

    return config;
  },
  function (error: any) {
    console.error(`api interceptor request error: ${error}`);
    return Promise.reject(error);
  }
);

export default HTTP;
