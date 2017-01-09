import React, { Component } from 'react';

export default ({text, searchUser}) => {
  let input;

  return (
    <div className="col-xs-12">
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Search" 
          value={text} 
          ref={node => input = node} 
          onChange={() => {
            searchUser(input.value); 
            input.value = '';
          }} 
        />
      </div>
    </div>
  );
}
