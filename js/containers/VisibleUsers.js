import { connect } from 'react-redux';
import { selectActiveUser } from '../actions';
import UserList from '../components/UserList';

const getVisibleUsers = (users, filterText) => {
  return users.filter((el) => 
    el.name.toLowerCase().indexOf(filterText.toLowerCase()) >= 0
  );
}

const mapStateToProps = (state) => {
  return {
    users: getVisibleUsers(state.users.users, state.searchUser),
    isFetching: state.users.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectActive: (id) => {
      dispatch(selectActiveUser(id))
    }
  }
}

const VisibleUsers = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default VisibleUsers;