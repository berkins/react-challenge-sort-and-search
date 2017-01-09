import React, { PropTypes } from 'react';
import UserData from './UserData';

const UserList = ({users, isFetching, selectActive}) => {
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
            <UserData key={user.id} user={user} onClick={() => selectActive(user.id)} />
          ) 
        }
      </tbody>
    </table>
  );
}

export default UserList;