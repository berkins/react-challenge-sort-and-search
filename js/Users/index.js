import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectActiveUser, fetchUsers } from './actions';

import UserData from './UserData';

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    const {users, isFetching, selectActiveUser} = this.props;

    if (isFetching) {
      return (
        <div style={{ textAlign:'center', verticalAlign:'middle' }}>
          <i className="fa fa-refresh fa-spin fa-2x fa-fw"></i>
        </div>
      )
    }

    return (
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Age</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          { 
            users.map((user) => 
              <UserData key={user.id} user={user} onClick={() => selectActiveUser(user.id)} />
            ) 
          }
        </tbody>
      </table>
    );
  }
}

const getVisibleUsers = (users, filterText) => {
  return users.filter((el) => 
    el.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
  );
}

export default connect(
  state => {
    return {
      users: getVisibleUsers(state.users.users, state.searchUser),
      isFetching: state.users.isFetching
    }
  },
  { selectActiveUser, fetchUsers }
)(UserList)
