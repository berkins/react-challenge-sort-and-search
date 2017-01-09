import React from 'react';

export default ({sortByName, sortByAge}) => {
  return (
    <div className="col-xs-12">
      <button onClick={sortByName} className="btn btn-sm btn-default"><i className="icon fa fa-sort-alpha-asc">&nbsp;By name</i></button>
      &nbsp;
      <button onClick={sortByAge} className="btn btn-sm btn-default"><i className="icon fa fa-sort-numeric-asc">&nbsp;By age</i></button>
    </div>
  );
}