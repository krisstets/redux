import axios from 'axios';


const service = {
    
    getAllPosts: async () => {
        const getAllPosts = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
        return getAllPosts.data;
    },
    
    getAllUsers: async () => {
        const getAllUsers = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return getAllUsers.data;
    }

}

export default service;