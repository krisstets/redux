import {SET_ALL_POSTS} from '../Actions/postAction';
import {SET_ACTIVE_POST} from '../Actions/postAction';

export function getAllPostsReducer(state={data:[]}, action) {
    switch(action.type) {
        case SET_ALL_POSTS:
            return {
                ...state,
                posts: action.payload
            };

       
        default:
            return state;
    }
}

export function getActivePostReducer(state={activeData:[]}, action){
    switch(action.type) {
        case SET_ACTIVE_POST:
            return {
                ...state,
                activePost:action.payload
            }
        default:
            return state;
    } 

}