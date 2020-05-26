import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../styles/styles.module.css';
import logo from '../images/Logo.png';


const Navbar = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} />
      </NavLink>

      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            About
          </NavLink>
        </li>
        <li className={styles.navLi}>
          <NavLink to="Signin" style={{ ...underline, ...textColor }}>
            Sign In
          </NavLink>
        </li>
        <li className={` ${styles.navLi} ${styles.signUp} `}>
          <NavLink to="UserForm" style={{ ...underline, ...textColor }}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
