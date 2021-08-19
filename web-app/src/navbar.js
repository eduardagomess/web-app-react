import React from 'react';
import logo from '../logo.png';

function Navbar(){
  return (
    <div>
      <ul id="nav">
        <img src={logo} ></img>
      </ul>
    </div>
);
}
export default Navbar;