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
export async function fetchNicknameCheck({ nickname }: { nickname: string }) {
  try {
    const resNicknameExists = await HTTP.get(`/api/member/checkNickname/`, {
      params: { nickname },
    });
    return resNicknameExists.data;
  } catch (e: any) {
    console.log(e);
  }
}

export function postLogin({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
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

export function chekcNickname(nickName: string) {
  return HTTP.get(`/api/member/checkNickname/${nickName}`);
}
