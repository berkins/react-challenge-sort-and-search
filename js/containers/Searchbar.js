import { connect } from 'react-redux';
import { searchUser } from '../actions';
import SearchInput from '../components/SearchInput';

export default connect(
  null,
  dispatch => ({
    searchUser: text => {
      dispatch(searchUser(text))
    }
  })
)(SearchInput)