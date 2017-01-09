import React from 'react';

export default ({user, onClick}) => {
  return (
    <tr onClick={onClick} style={{ cursor: "pointer" }}>
      <td><img src={`images/${user.image}.svg`} style={ {width:'50px', height:'50px'} } /></td>
      <td>{user.name}</td>
      <td>{user.age}</td>
      <td>{user.phone}</td>
    </tr>
  );
}