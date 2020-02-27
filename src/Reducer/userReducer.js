const  SET_ALL_USERS = 'SET_ALL_USERS';

export const initialState = {
  users: []
};

export const getAllUsersReducer = (state, action) => {
  switch (action.type) {
    case SET_ALL_USERS:
      return { ...state, posts: action.payload };

    default:
      return state;
  }
};