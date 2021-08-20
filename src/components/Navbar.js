import React from 'react';
import logo from '../images/logo.png';

function Navbar(){
  return (
    <div>
      <ul id="nav">
        <img src={logo} alt="Logo do Bridge" ></img>
      </ul>
    </div>
);
}
export default Navbar;