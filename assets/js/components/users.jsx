import React from 'react';
import { Link } from 'react-router-dom';

function User(params) {
  return <p>{params.user.name} </p>;
}

export default function Users(params) {
  let users = _.map(params.users, (uu) => 
  <li key={uu.id}> { uu.name } </li> );
  return <div>
      <ul>
    { users }
    </ul>
  </div>;
}