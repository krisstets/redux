/*export const  SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POSTS';
export const AXIOS_POSTS_ERROR = 'AXIOS_POSTS_ERROR';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'

export function fetchPostsRequest(bool) {
    return {
      type: FETCH_POSTS_REQUEST,
      payload: bool
    }
  }

export function getAllPosts(posts) {
    return {
        type: SET_ALL_POSTS,
        payload: posts
    }
}

export function getActivePost(activePost) {
    return {
        type: SET_ACTIVE_POST,
        payload: activePost
    }
}

export function errorPostsAccess(bool) {
    return {
        type: AXIOS_POSTS_ERROR,
        payload: bool
    }
}*/
import {CALL_API, Schemas} from '../Middleware/api'


export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_SUCCESS = 'POSTS_SUCCESS';
export const POSTS_FAILURE = 'POSTS_FAILURE';


export const fetchPosts = () => (dispatch) => {
    return dispatch({
        [CALL_API]: {
            types: [POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE],
            endpoint: `posts`,
            schema: Schemas.POST
        }
    })
}

