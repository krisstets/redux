export const  SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POSTS';


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
