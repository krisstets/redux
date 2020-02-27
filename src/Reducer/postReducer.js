import {SET_ALL_POSTS} from '../Actions/postAction'

export function getAllPostsReducer(state={data:[]}, action) {
    switch(action.type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            }

        default:
           
            return state;
    }
}
