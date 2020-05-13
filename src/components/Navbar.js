import React from 'react';
import {Link, NavLink} from 'react-router-dom';
// import styles from '../styles.css';
import logo from '../images/Logo.png';


const Navbar = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className="navbar">
      <img className="logo" src={logo} />

      <ul className="navUl">
        <li className="navLi">
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            About
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="Signin" style={{ ...underline, ...textColor }}>
            Sign In
          </NavLink>
        </li>
        <li className="navLi">
          <NavLink to="Signup" style={{ ...underline, ...textColor }}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
