import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import store from 'redux/store';
import jwt_decode from 'jwt-decode';
import moment from 'moment';
import { getReissueAccessToken } from './userAPI';
import { login, logout } from 'redux/login/loginSlice';

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
    async function(config: AxiosRequestConfig) {
        const { loginStore } = store.getState();

        if (loginStore.isLogin) {
            const decodeAccessToken: Token = jwt_decode(loginStore.accesToken);
            const decodeRefreshToken: Token = jwt_decode(loginStore.refreshToken);

            const currentDate = moment();
            const accessTokenExp = new Date(decodeAccessToken.exp * 1000);
            const refreshTokenExp = new Date(decodeRefreshToken.exp * 1000);

            if (config && config.headers && loginStore.accesToken) {
                config.headers['Authorization'] = `Bearer ${loginStore.accesToken}`;
            }

            if (!currentDate.isBefore(accessTokenExp)) {
                if (currentDate.isBefore(refreshTokenExp)) {
                    const { data: { accessToken } } = await getReissueAccessToken();
                    store.dispatch(login({...loginStore, accesToken: accessToken}));
                    if (config && config.headers && loginStore.accesToken) {
                        config.headers['Authorization'] = `Bearer ${accessToken}`;
                    }
                } else {
                    store.dispatch(logout());
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
