import axios from 'axios';


export const service = {
    
    
    
    getAllUsers: async () => {
        const getAllUsers = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        return getAllUsers.data;
    }

}
