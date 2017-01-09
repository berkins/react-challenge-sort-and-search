const users = (state = { users: [], isFetching: false }, action) => {
  switch (action.type) {
    case 'SORT':
      return Object.assign({}, state, {
        users: state.users.map(el => el).sort((a,b) => {
          if (action.sorted.dir === 'asc') {
            return a[action.sorted.by] > b[action.sorted.by] ?  1 : a[action.sorted.by] < b[action.sorted.by] ? -1 : 0
          } else {
            return a[action.sorted.by] > b[action.sorted.by] ? -1 : a[action.sorted.by] < b[action.sorted.by] ?  1 : 0
          }
        })
      });
    case 'REQUEST_USERS':
      return Object.assign({}, state, { isFetching: true });
    case 'RECEIVE_USERS':
      return Object.assign({}, state, { isFetching: false, users: action.users });
    default:
      return state;
  }
}

export default users;