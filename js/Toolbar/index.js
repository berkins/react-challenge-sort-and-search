import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sortUsers } from './actions';

class SortButtons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {sortByName, sortByAge} = this.props;

    return (
      <div className="col-xs-12">
        <button onClick={sortByName} className="btn btn-sm btn-default"><i className="icon fa fa-sort-alpha-asc">&nbsp;By name</i></button>
        &nbsp;
        <button onClick={sortByAge} className="btn btn-sm btn-default"><i className="icon fa fa-sort-numeric-asc">&nbsp;By age</i></button>
      </div>
    );
  }
}

export default connect(
  null,
  dispatch => {
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
)(SortButtons)
