import { combineReducers } from "redux";
import { postsReducer } from './postReducer';
import { usersReducer } from "./userReducer";

export const reducers = combineReducers({
    postsRequestResults: postsReducer,
    usersRequestResults: usersReducer
});
