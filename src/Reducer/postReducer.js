import {SET_ALL_POSTS} from '../Actions/postAction'

export function getAllPostsReducer(state={}, action) {
    switch(action.type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                data: action.payload
            }

        default:
           
            return state;
    }
}
