import { FETCH_USERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      console.info(7, 'users reducer called');
      return action.payload;

    default:
      return state;
  }

}