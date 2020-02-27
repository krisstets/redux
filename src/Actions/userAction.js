const  SET_ALL_USERS = 'SET_ALL_USERS';
import service from "../Service/service";

export const getAllUsers = () => async (dispatch) => {
  try {
    const getAllUsers = await service.getAllUsers();
    if (getAllPosts) {
      dispatch({
        type: SET_ALL_USERS,
        payload: getAllUsers
      });
    }
  } catch (error) {
    console.log("error in getAllUsersAction");
  }
};