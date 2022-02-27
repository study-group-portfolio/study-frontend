import axios, { AxiosResponse, AxiosInstance } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
//import Login from "pages/Users/Login";
import HTTP from 'api/http';

export interface IUserLoginAPI {
  email: string;
  password: string;
}

interface IUserSignupAPI {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}

declare module "axios" {
  export interface AxiosResponse {
    json: () => {};
  }
}

const instance: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 15000,
});

// 로그인
// export function postLogin() {
//   return fetch(`${process.env.REACT_APP_BASE_URL}/api/members/signin`).then(
//     (res) => res.json()
//   );
// }

// 닉네임 중복 체크
export const getCheckNickname = createAsyncThunk(
  "get/checkNickname",
  async (nickname: string) => {
    return instance(`api/`);
  }
);

export function postLogin({ email, password }: { email: string, password: string}) {
  return HTTP.post("/api/member/signin", { email, password });
}

export function getReissueAccessToken() {
  return HTTP.get("/api/auth/refresh-token");
}

export function test() {
  return HTTP.get("/api/member/");
}
