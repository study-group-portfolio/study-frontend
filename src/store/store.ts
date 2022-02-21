import { createStore, combineReducers } from "redux";
import loginReducer from 'store/login/state';
import { persistReducer, persistStore  } from "redux-persist";
import storageSession from 'redux-persist/lib/storage/session'

const persistConfig = {
    key: "root",
    storage: storageSession,
}

const reducer = combineReducers({
    login: loginReducer,
});

export const store = createStore(persistReducer(persistConfig, reducer));
export const persistStor = persistStore(store);