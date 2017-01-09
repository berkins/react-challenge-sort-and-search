import React, { Component } from 'react';

export default class SearchInput extends Component {
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