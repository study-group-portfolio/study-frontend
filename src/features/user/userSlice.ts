import axios from "axios";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
// Interface
import { IUser } from "../../utils/interface";
import { create } from "domain";
import { RootState } from "app/store";

const initialState: IUser = {
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setUserAsync.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

// 회원가입용 유저 정보를 Redux 상태값에 넣기
export const addUserAsync = createAsyncThunk(
  "ADD_USER",
  async (user: IUser) => {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/users/signup`,
      user
    );
    return response.data;
  }
);

// 로그인용 유저 정보를 Redux 상태값에 넣기
export const setUserAsync = createAsyncThunk(
  "LOGIN_USER",
  async (user: IUser): Promise<IUser> => {
    const response = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/users/login/${user.email}`
    );
    return response.data;
  }
);

export const getUserInfo = (state: RootState) => state.user;

export default userSlice.reducer;
