import { getAllPosts, fetchPostsRequest, errorPostsAccess } from '../Actions/postAction';
import axios from 'axios';

export function fetchPosts() {
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
}