import React from 'react';
import Navbar from './Navbar';
import UserForm from './UserForm';
import {NavLink} from 'react-router-dom';
import css from '../styles/intro.module.css';

import LandingPage from './LandingPage';
import dots from '../images/dots.png';
import Footer from './Footer';
import match from '../images/match.png';
import calendar from '../images/calendar.png';
import star from '../images/star.png';
import yellowCircle from '../images/yellowCircle.png';
import linkedin from '../images/linkedin.png'

// Join women 2 work

class Intro extends React.Component {

  render() {
    const underline = {textDecoration: "none"};
    const textColor = {color: "#F55E61"};

    return (
      <div>
        <Navbar />
        <div className={css.introContainer}>

          <div className={css.item1}>
            <div className={css.yellowBallWrap}>
              <img src={yellowCircle} className={css.yellowBall} />
            </div>
            <p className={css.title}>Join Women2Work</p>
            <div>
              <img src={dots} className={css.dots} />
            </div>
          </div>

          <div className={css.item2}>
            <div><img src={match} className={css.star} /></div>
            <p className={css.smallTitle}>Personalized Matchmaking</p>
            <p className={css.text}>
              Upgrade your skills with the help of a mentor or find a mentee to connect with and help them on their career journey.
            </p>
          </div>

          <div className={css.item3}>
            <div><img src={calendar} className={css.star} /></div>
            <p className={css.smallTitle}>Events and Workshops</p>
            <p className={css.text}>Connect with others based on your passions, skills, and hobbies.</p>
          </div>

          <div className={css.item4}>
            <div><img src={star} className={css.star} /></div>
            <p className={css.smallTitle}>Referral Program</p>
            <p className={css.text}>
              Mentees who complete W2W Guidelines and are approved by Mentors can enter the referral program.
            </p>
          </div>

          <div className={css.item5}>
            <div className={css.signup}>
              <NavLink to="/UserForm" style={{...underline, ...textColor}}>
                Sign up with email
              </NavLink>
            </div>
            <div div className={css.linkedinWrap}>
              <img src={linkedin} className={css.linkedin} />
            </div >
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Intro;