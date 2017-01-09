import React from 'react';

import Searchbar from '../containers/Searchbar';
import Toolbar from '../containers/Toolbar';
import VisibleUsers from '../containers/VisibleUsers';
import ActiveUser from '../containers/ActiveUser';

const App = () => (
  <div className="container">
    <div className="row">
      <Searchbar />
    </div>
    <div className="row">
      <Toolbar />
    </div>
    <div className="row">
      <div className="col-xs-9">
        <VisibleUsers />
      </div>
      <div className="col-xs-3">
        <ActiveUser />
      </div>
    </div>
  </div>
)

export default App