import {combineReducers,  legacy_createStore as createStore} from "redux";
import { configureStore } from '@reduxjs/toolkit'
import profileReducer from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import friendBarReducer from "./friendBar-reducer";

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    friendBar:friendBarReducer
})

 export const store = configureStore({
    reducer: rootReducer
})