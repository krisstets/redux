export const  SET_ALL_POSTS = 'SET_ALL_POSTS';
export const SET_ACTIVE_POST = 'SET_ACTIVE_POSTS';


export function getAllPosts(data) {
    return {
        type: SET_ALL_POSTS,
        payload: data
    }
}

export function getActivePost(activeData) {
    return {
        type: SET_ACTIVE_POST,
        payload: activeData
    }
}
