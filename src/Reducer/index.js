import { combineReducers } from "redux";
import { postsReducer } from './postReducer';
import { getAllUsersReducer } from "./userReducer";

export const reducers = combineReducers({
    postsRequestResults: postsReducer,
    usersRequestResults: getAllUsersReducer
});
