import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MemberState {
    bio: string;
    email: string;
    img: string;
    nickname: string;
    onOffStatus: string;
    portpolios: string[];
    positions: string[];
    regions: string[];
    skills: string[];
    studyType: string;
}

export const memberSlice = createSlice({
    name: "login",
    initialState: {
        bio: '',
        email: '',
        img: '',
        nickname: '',
        onOffStatus: '',
        portpolios: [],
        positions: [],
        regions: [],
        skills: [],
        studyType: '',
    },
    reducers: {
        edit: (state: MemberState, action: PayloadAction<MemberState>) => {
            state.bio = action.payload.bio;
            state.email = action.payload.email;
            state.img = action.payload.img;
            state.nickname = action.payload.nickname;
            state.onOffStatus = action.payload.onOffStatus;
            state.portpolios = action.payload.portpolios;
            state.positions = action.payload.positions;
            state.regions = action.payload.regions;
            state.skills = action.payload.skills;
            state.studyType = action.payload.studyType;
        },
        remove: (state: MemberState) => {
            state.bio = "";
            state.email = "";
            state.img = "";
            state.nickname = "";
            state.onOffStatus = "";
            state.portpolios = [];
            state.positions = [];
            state.regions = [];
            state.skills = [];
            state.studyType = "";
        }
    }
});

export const { edit, remove } = memberSlice.actions;

export default memberSlice.reducer;