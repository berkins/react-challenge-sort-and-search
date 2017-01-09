import { connect } from 'react-redux';
import { sortUsers } from '../actions';
import SortButtons from '../components/SortButtons';

const mapDispatchToProps = (dispatch) => {
  let sorted = { by: '', dir: '' };
  return {
    sortByName: () => {
      if (sorted.by === 'name' && sorted.dir === 'asc') {
        sorted = { by: 'name', dir: 'desc' };
      } else {
        sorted = { by: 'name', dir: 'asc' };
      }
      dispatch(sortUsers(sorted))
    },
    sortByAge: () => {
      if (sorted.by === 'age' && sorted.dir === 'asc') {
        sorted = { by: 'age', dir: 'desc' };
      } else {
        sorted = { by: 'age', dir: 'asc' };
      }
      dispatch(sortUsers(sorted))
    }
  }
}

const Toolbar = connect(
  null,
  mapDispatchToProps
)(SortButtons)

export default Toolbar;







