import axios, { AxiosResponse, AxiosInstance } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

interface IUserLoginAPI {
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

// 닉네임 중복 체크
export const getCheckNickname = createAsyncThunk(
  "get/checkNickname",
  async (nickname: string) => {
    return instance(`api/`);
  }
);
