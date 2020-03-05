import {POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE} from '../Actions/postAction';

const initialState = {
    posts: [],
    activePost: {}
};

export function postsReducer(state = initialState, action) {
    switch(action.type) {
        case POSTS_REQUEST:
            return {
              ...state,
            };
        case POSTS_SUCCESS:
            return {
                ...state,
                posts: action.payload
            };
        case POSTS_FAILURE:
            return {
                ...state,
                posts: undefined
            };
        default:
            return state;
    }
}
