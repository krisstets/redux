import { combineReducers } from "redux";
import { getAllPostsReducer } from './postReducer';
import { getAllUsersReducer } from "./userReducer";

export const reducers = combineReducers({
    postsRequestResults: getAllPostsReducer,
    usersRequestResults: getAllUsersReducer
})