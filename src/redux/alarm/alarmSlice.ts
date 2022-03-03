import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface alarmState {
    studyAlarm: string[];
    memberAlarm: string[];
}

export const alarmSlice = createSlice({
    name: "login",
    initialState: {
        studyAlarm: [],
        memberAlarm: [],
    },
    reducers: {
        add: (state: alarmState, action: PayloadAction<alarmState>) => {
            state.studyAlarm = action.payload.studyAlarm;
            state.memberAlarm = action.payload.memberAlarm;
        },
        remove: (state: alarmState) => {
            state.studyAlarm = [];
            state.memberAlarm = [];
        }
    }
});

export const { add, remove } = alarmSlice.actions;

export default alarmSlice.reducer;