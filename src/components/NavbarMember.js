import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../styles/styles.module.css';
import logo from '../images/Logo.png';
import pic1 from '../images/pic1.png';

//    <div className={styles.magnifier}>&#9740;</div>
const NavbarMember = () => {
  const underline = {textDecoration: "none"};
  const textColor = {color: "#F55E61"};

  return (
    <div className={styles.navbar}>
      <NavLink to="/">
        <img className={styles.logo} src={logo} alt="" />
      </NavLink>
      <div className={styles.search}>
        <p className={styles.searchText}>Search for mentors or events...
          <span className={styles.magnifier}>&#9740;</span>
        </p>
      </div>

      <ul className={styles.Ul}>
        <li className={styles.Li}>
          <NavLink to="/" style={{ ...underline, ...textColor }}>
            About
          </NavLink>
        </li>
        <li className={styles.Li}>
          <NavLink to="Signin" style={{ ...underline, ...textColor }}>
            Inbox
          </NavLink>
        </li>
        <li className={styles.Li}>
          <NavLink to="mentor" style={{ ...underline, ...textColor }}>
          <div className={styles.profileCrop}>
            <img src={pic1} className={styles.miniProfile} />
          </div>
          </NavLink>
        </li>
      </ul>




    </div>
  );
}

export default NavbarMember;
