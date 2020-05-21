import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from '../styles/styles.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

import faces from '../images/faces.png';
import match from '../images/match.png';
import calendar from '../images/calendar.png';
import badge from '../images/badge.png';
import dots from '../images/dots.png';
import star from '../images/star.png';
import pinkCircle from '../images/pinkCircle.png';


class LandingPage extends React.Component {
  render() {

  const underline = {textDecoration: "none"};
  const textColor = {color: "white"};

    return (
      <div>
        <Navbar />
        <div className={styles.container}>

          <div className={styles.itemA}>
            <div className={styles.bigCircle}>
              <img className={styles.pinkCircle} src={pinkCircle} alt="" />
            </div>
            <h1>Women2Work</h1>
            <p className={styles.red}>
              Women helping women soar in their careers.
            </p>
            <p className={styles.missionText}>
              Join a network. Attend an event. <br />
              Upgrade your skills. Find a mentor.
            </p>
            <div className={styles.start}>
              <NavLink to="Intro" style={{ ...underline, ...textColor }}>
                Get Started
              </NavLink>
            </div>
          </div>

          <div className={styles.itemB}>
            <img src={faces} alt="faces" className={styles.faces} />
          </div>

          <div className={styles.itemC}>
            <p className={`${styles.missionText} ${styles.red}`}>
              Join our community of women looking to advance their careers.
            </p>
          </div>

          <div className={styles.itemD}>
            <img src={match} alt="" className={styles.icon} />
            <h4>Personalized Matchmaking</h4>
            <p className={styles.featText}>
              Upgrade your skills with the help of a mentor or find a mentee to
              connect with and help them on their career journey.
            </p>
          </div>

          <div className={styles.itemE}>
            <img src={badge} alt="" className={styles.icon} />
            <h4>Networking</h4>
            <p className={styles.featText}>
              Connect with peers and mentors based on industry, hobbies, and
              skills.
            </p>
          </div>

          <div className={styles.itemF}>
            <img src={calendar} alt="" className={styles.icon} />
            <h4>Events and Workshops</h4>
            <p className={styles.featText}>
              Connect with others based on your passion, skills, and hobbies.
            </p>
          </div>

          <div className={styles.itemG}>
            <img src={star} alt="" className={styles.icon} />
            <h4>Referral Program</h4>
            <p className={styles.featText}>
              Mentees who complete W2W Guidelines and are approved by Mentors
              can enter the referral program.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default LandingPage;