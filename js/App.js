import React from 'react';

import Searchbar from './Searchbar';
import Toolbar from './Toolbar';
import Users from './Users';
import ActiveUser from './Users/ActiveUser';

export default () => (
  <div className="container">
    <div className="row">
      <div className="col-xs-12">
        <Searchbar />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-12">
        <Toolbar />
      </div>
    </div>
    <div className="row">
      <div className="col-xs-9">
        <Users />
      </div>
      <div className="col-xs-3">
        <ActiveUser />
      </div>
    </div>
  </div>
)
