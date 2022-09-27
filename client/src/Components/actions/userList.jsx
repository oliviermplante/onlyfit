import axios from 'axios';

export const setUserList = (userList) => ({
  type: 'SET_USER_LIST',
  userList,
});

export const getUserList = (filters) => async (dispatch) => {
  try {
    dispatch({ type: 'GET_USER_LIST_REQUEST' });
    const response = await axios.get('/users', { params: filters });
    dispatch(
      setUserList(
        response.data.map((user) => ({
          ...user,
          votes: user.votes,
        }))
      )
    );
    dispatch({ type: 'GET_USER_LIST_SUCCESS' });
  } catch (e) {
    dispatch({
      type: 'GET_USER_LIST_FAILURE',
      message: e.message,
      response: e.response,
    });
  }
};
