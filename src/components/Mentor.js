import React from 'react';
import {NavLink} from 'react-router-dom';
import css from '../styles/mentor.module.css';
import NavbarMember from './NavbarMember';
import Footer from './Footer';

import bubbles from '../images/dots.png';
import pic1 from '../images/pic1.png';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import pic5 from '../images/pic5.png';
import pic6 from '../images/pic6.png';
import pic7 from '../images/pic7.png';
import pic8 from '../images/pic8.png';
import event1 from '../images/event1.png';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.png';
import yellowCircle from '../images/yellowCircle.png';

// Hi, I'm Sophia

class Mentor extends React.Component {
  render() {
    return (
      <div>
        <NavbarMember />
        <div className={css.mentorContainer}>

          <div className={css.item50}>50
            <div>Profile</div>
          </div>

          <div className={css.item51}>
            <div className={css.topWrap}>
              <div className={css.yellowCircleWrap}>
                <img src={yellowCircle} alt="" className={css.yellowCircle} />
              </div>
              <p className={css.topTitle}>{"Hi, I'm Sophia."}</p>
              <p>
                I have been mentoring software engineers for 3 years and specialize in web development with Javascript.I also like drawing, hiking, and just watching Netflix with friends.
              </p>
            </div>
          </div>

          <div className={css.item52}>
            <p className={css.skills}>Skills</p>
            <ul>
              <li>Tags</li>
              <li>Front End</li>
              <li>Back End</li>
            </ul>
          </div>

          <div className={css.item53}>
            <p className={css.skills}>Hobbies & Interests</p>
            <ul>
              <li className={css.hobbies}>Drawing</li>
              <li className={css.hobbies}>Hiking</li>
              <li className={css.hobbies}>Netflix</li>
            </ul>

          </div>

          <div className={css.item54}>
            <p className={css.eventTitle}>Events & Workshops with Sophia
              <span className={css.floatRight}>Filter by Upcoming Events</span>
            </p>
          </div>

          <div className={css.item55}>
            <div className={css.eventWrap}>
              <img src={event3} alt="event" className={css.eventPic} />
              <p>Tues, 10:00am 5/5</p>
              <p>Speaker seriew for business leaders</p>
            </div>
          </div>

          <div className={css.item56}>56 Event 2

          </div>

          <div className={css.item57}>57 Event 3</div>

          <div className={css.item58}>58</div>

          <div className={css.item59}>59</div>

          <div className={css.item60}>60</div>

          <div className={css.item61}>61</div>

          <div className={css.item62}>62</div>

          <div className={css.item63}>63</div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Mentor;