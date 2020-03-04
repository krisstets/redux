export const  SET_ALL_USERS = 'SET_ALL_USERS';

export function getAllUsers(data) {
    return {
        type: SET_ALL_USERS,
        payload: data
    }
}

