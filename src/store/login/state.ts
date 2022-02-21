import { AnyAction } from "redux";
import createReducer from "store/common/createReducer";

export interface LoginInfo {
    isLogin: boolean;
    accessToken: string;
    refreshToken: string;
}

const REMOVE: string = "login/REMOVE";
const EDIT: string = "login/EDIT";

export const removeLogin = () => ({ type: REMOVE });
export const editLogin = (accessToken: string, refreshToken: string) => ({ type: EDIT, accessToken, refreshToken });

const INITIAL_STATE: LoginInfo = { isLogin: false, accessToken: '', refreshToken: '' };

const reducer: (state: any, action: AnyAction) => (any) = createReducer(INITIAL_STATE, {
    [EDIT]: (state: LoginInfo, action: AnyAction) => {
        state.isLogin = true;
        state.accessToken = action.accessToken;
        state.refreshToken = action.refreshToken;
    },
    [REMOVE]: (state: LoginInfo, action: AnyAction) => {
        state.isLogin = false;
        state.accessToken = "";
        state.refreshToken = "";
    },
});

export default reducer;