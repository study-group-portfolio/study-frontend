//import Login from "pages/Users/Login";
import HTTP from "api/http";

export interface IUserLoginAPI {
  email: string;
  password: string;
}

interface IUserSignupCheckAPI {
  email: string;
  nickname: string;
}

declare module "axios" {
  export interface AxiosResponse {
    json: () => {};
  }
}

// 닉네임 중복 체크
export function getCheck({ nickname, email }: IUserSignupCheckAPI) {
  const resNickname = HTTP.get(`/api/member/checkNickname/${nickname}`);
  const resEmail = HTTP.get(`/api/member/signup/${email}`);
  return { resNickname, resEmail };
}

export function postLogin({ email, password }: { email: string, password: string}) {
  return HTTP.post("/api/member/signin", { email, password });
}

export function getReissueAccessToken() {
  return HTTP.get("/api/auth/refresh-token");
}

export function test() {
  return HTTP.get("/api/member/");
}

export function getMyProfile() {
  return HTTP.get("/api/member/profile/myProfile");
}
