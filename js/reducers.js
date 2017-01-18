import { combineReducers } from 'redux';

import activeUser from './Users/UserData/reducers';
import searchUser from './Searchbar/reducers';
import users from './Users/reducers';

export default combineReducers({
  users,
  activeUser,
  searchUser
})
