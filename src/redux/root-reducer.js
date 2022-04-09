import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReduser from './user/user.reducer';
import headerReducer from "./header/header.reducer";
import surahReducer from "./surah/surah.reducer";

const persistConfig ={
    key:'root',
    storage,
    whitelist:[]
};

const rootReduser=combineReducers({
    user:userReduser,
    header: headerReducer,
    surah: surahReducer
});

export default persistReducer(persistConfig ,rootReduser);