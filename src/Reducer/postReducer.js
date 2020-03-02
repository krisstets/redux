import {SET_ALL_POSTS, SET_ACTIVE_POST, FETCH_POSTS_REQUEST} from '../Actions/postAction';

const initialState = {
    posts: [],
    activePost: {}
};

export function postsReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS_REQUEST:
            return {
              ...state,
            };
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
