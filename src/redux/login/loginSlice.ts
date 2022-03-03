import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginState {
    isLogin: boolean;
    accesToken: string;
    refreshToken: string;
}

export const loginSlice = createSlice({
    name: "login",
    initialState: {
        isLogin: false, 
        accesToken: '', 
        refreshToken: ''
    },
    reducers: {
        login: (state: LoginState, action: PayloadAction<LoginState>) => {
            state.isLogin = true;
            state.accesToken = action.payload.accesToken
            state.refreshToken = action.payload.refreshToken
        },
        logout: (state: LoginState) => {
            state.isLogin = false;
            state.accesToken = "";
            state.refreshToken = "";
        }
    }
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;