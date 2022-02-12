import axios, { AxiosResponse, AxiosInstance } from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
export async function postLogin() {
  const response = await fetch(
    `${process.env.REACT_APP_BASE_URL}/api/members/signin`
  );
  console.log(response);
}

// 닉네임 중복 체크
export const getCheckNickname = createAsyncThunk(
  "get/checkNickname",
  async (nickname: string) => {
    return instance(`api/`);
  }
);
