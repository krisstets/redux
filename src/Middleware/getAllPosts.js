import { getAllPosts, fetchPostsRequest, errorPostsAccess } from '../Actions/postAction';
//import axios from 'axios';

/*export async function fetchPosts() {
    return async function(dispatch) {
        try{
            dispatch(fetchPostsRequest());
            const getPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
            const posts = await getPosts.data;
            dispatch(getAllPosts(posts))
        }
       catch(error) {
            dispatch(errorPostsAccess(error))
       }
    }
}*/


export function fetchPosts(url) {
    return (dispatch) => {
        dispatch(fetchPostsRequest(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(fetchPostsRequest(false));

                return response;
            })
            .then((response) => response.json())
            .then((posts) => dispatch(getAllPosts(posts)))
            .catch(() => dispatch(errorPostsAccess(true)));
    };
}