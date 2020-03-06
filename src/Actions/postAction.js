import {CALL_API, Schemas} from '../Middleware/api'
import postsList from '../Components/postsList';


export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POST'


export const fetchPosts = () => (dispatch) => {
    return dispatch({
        [CALL_API]: {
            types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
            endpoint: `posts`,
            schema: Schemas.POSTS,
            payload: postsList
        }
    })
}


export function getActivePost(activePost) {
    return {
        type: SET_ACTIVE_POST,
        payload: activePost
    }
}