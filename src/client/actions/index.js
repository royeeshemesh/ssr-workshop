import axios from 'axios';

export const FETCH_USERS = 'fetch_users';
export const fetchUsers = ()=> async dispatch => {
  console.info(6, 'fetch users action created');
  const users = await axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users'
  });
  dispatch({
    type: FETCH_USERS,
    payload: users.data
  });
};