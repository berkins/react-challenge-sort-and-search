const
  selectActiveUser = id => (
    {
      type: 'SET_ACTIVE',
      id
    }
  ),

  requestUsers = () => (
    {
      type: 'REQUEST_USERS'
    }
  ),

  receiveUsers = json => (
    {
      type: 'RECEIVE_USERS',
      users: json
    }
  ),

  fetchUsers = () => dispatch => {
    dispatch(requestUsers());
    return fetch('data.json')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveUsers(json))
      )
  }
;

export { selectActiveUser, fetchUsers };
