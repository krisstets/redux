import {SET_ALL_USERS} from '../Actions/userAction'

export function getAllUsersReducer(state={data:[]}, action) {
    switch(action.type) {
        case SET_ALL_USERS:
            return {
                ...state,
                posts: action.payload
            }

        default:
           
            return state;
    }
}
