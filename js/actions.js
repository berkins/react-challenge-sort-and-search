import fetch from 'isomorphic-fetch';

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