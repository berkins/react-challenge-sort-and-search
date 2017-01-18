import fetch from 'isomorphic-fetch';

export const selectActiveUser = (id) => {
  return {
    type: 'SET_ACTIVE',
    id
  }
}

export const searchUser = (text) => {
  return {
    type: 'SEARCH',
    text
  }
}

export const sortUsers = (sorted) => {
  return {
    type: 'SORT',
    sorted
  }
}

export const requestUsers = () => {
  return {
    type: 'REQUEST_USERS'
  }
}

export const receiveUsers = (json) => {
  return {
    type: 'RECEIVE_USERS',
    users: json
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(requestUsers());
    return fetch('data.json')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveUsers(json))
      )
  }
}