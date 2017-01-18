import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {user} = this.props;

    if (user === undefined) {
      return (<div className="col-xs-3"></div>);
    }

    return (
      <div className="thumbnail">
        <img src={`images/${user.image}.svg`} style={ {width:'200px', height:'200px'} } />
        <div className="caption">
          <h3>{user.name}</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Name</td>
                <td style={ {textAlign:'center'} }>{user.name}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td style={ {textAlign:'center'} }>{user.phone}</td>
              </tr>
              <tr>
                <td>Animal</td>
                <td style={ {textAlign:'center'} }>{user.image}</td>
              </tr>
            </tbody>
          </table>
          <p><span>{user.phrase}</span></p>
        </div>
      </div>
    );
  }
}

const getActiveUser = (users, id) => {
  return users.filter((el) => el.id === id)[0];
}

export default connect(
  state => {
    return {
      user: getActiveUser(state.users.users, state.activeUser)
    }
  },
  null
)(UserDetails)
