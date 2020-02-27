import { combineReducers } from "redux";
import { getAllPostsReducer } from './postReducer';

export const reducers = combineReducers({
    postsRequestResults: getAllPostsReducer
})