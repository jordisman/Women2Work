import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../styles/styles.module.css';
import logo from '../images/Logo.png';


const NavbarMember = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className={styles.navbar}>
      <img className={styles.logo} src={logo} />

      <ul className={styles.navUl}>
        <li className={styles.navLi}>
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            About
          </NavLink>
        </li>
        <li className={styles.navLi}>
          <NavLink to="Signin" style={{ ...underline, ...textColor }}>
            Inbox
          </NavLink>
        </li>
        <li className={` ${styles.navLi} ${styles.signUp} `}>
          <NavLink to="Signup" style={{ ...underline, ...textColor }}>
            Sign Up
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavbarMember;
