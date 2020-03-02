export const  SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POSTS';
export const AXIOS_POSTS_ERROR = 'AXIOS_POSTS_ERROR';
export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST'

export function fetchPostsRequest() {
    return {
      type: FETCH_POSTS_REQUEST,
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

export function errorPostsAccess() {
    return {
        type: AXIOS_POSTS_ERROR,
        payload: undefined
    }
}