
import {USER_REQUEST, USER_FAILURE, USER_SUCCESS} from '../Actions/userAction';

export function usersReducer(state={users:{}}, action) {
    switch(action.type) {
        case USER_REQUEST:
            return{
                ...state
            };
        case USER_SUCCESS:
            return{
                ...state,
                users: action.payload
            };
        case USER_FAILURE:
            return{
                ...state,
                users: undefined
            }
            default:
                return state;
    }
}