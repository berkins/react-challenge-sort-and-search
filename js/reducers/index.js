import { combineReducers } from 'redux';
import users from './users';
import activeUser from './activeUser';
import searchUser from './searchUser';

const usersApp = combineReducers({
  users,
  activeUser,
  searchUser
})

export default usersApp;