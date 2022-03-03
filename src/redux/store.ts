import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from 'redux/login/loginSlice';
import memberReducer from 'redux/member/memberSlice';
import alarmReducer from 'redux/alarm/alarmSlice';
import sessionStorage from 'redux-persist/lib/storage/session';
import { persistReducer } from 'redux-persist';

const reducers = combineReducers({
    loginStore: loginReducer,
    memberStore: memberReducer,
    alarmStore: alarmReducer
})

const persistConfig = {
    key: 'root',
    storage: sessionStorage
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;