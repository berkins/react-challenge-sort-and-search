import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const getActiveUser = (users, id) => {
  return users.filter((el) => el.id === id)[0];
}

const mapStateToProps = (state) => {
  return {
    user: getActiveUser(state.users.users, state.activeUser)
  }
}

const showActive = connect(
  mapStateToProps,
  null
)(UserDetails)

export default showActive;