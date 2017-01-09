import { connect } from 'react-redux';
import { searchUser } from '../actions';
import SearchInput from '../components/SearchInput';

const mapStateToProps = (state) => {
  return {
    text: state.searchUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchUser: (text) => {
      dispatch(searchUser(text))
    }
  }
}

const SearchUser = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput)

export default SearchUser;