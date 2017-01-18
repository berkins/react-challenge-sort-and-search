import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchUser } from '../actions';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) { this.props.searchUser(e.target.value) }

  render() {
    return (
      <div className="col-xs-12">
        <div className="form-group">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Search" 
            onChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    searchUser: text => {
      dispatch(searchUser(text))
    }
  })
)(SearchInput)
