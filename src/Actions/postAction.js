export const  SET_ALL_POSTS = 'SET_ALL_POSTS';

export function getAllPosts(data) {
    return {
        type: SET_ALL_POSTS,
        payload: data
    }
}
