import {CALL_API} from '../Middleware/api';

export const USER_REQUEST = 'USER_REQUEST';
export const USER_SUCCESS = 'USER_SUCCESS';
export const USER_FAILURE = 'USER_FAILURE';

export const fetchUser = () => (dispatch) => {
    return dispatch({
        [CALL_API]: {
            types: [USER_REQUEST, USER_SUCCESS, USER_FAILURE],
            endpoint: `/user`
        }
    })
}