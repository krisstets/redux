import {SET_ALL_POSTS} from '../Actions/postAction';
import {SET_ACTIVE_POST} from '../Actions/postAction';

const initialState = {
    posts: [],
    activePost: {}
};

export function postsReducer(state = initialState, action) {
    switch(action.type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            };
        case SET_ACTIVE_POST:
            return {
                ...state,
                activePost: action.payload
            };
        default:
            return state;
    }
}
