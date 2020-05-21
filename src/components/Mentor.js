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
            <div className={css.item50}>50 </div>
            <div className={css.item51}>51 Hi, I am Sophia.</div>
            <div className={css.item52}>52 Skills</div>
            <div className={css.item53}>53 Hobbies & Interests</div>
            <div className={css.item54}>54 Events & Workshops with Sophia</div>
            <div className={css.item55}>55 Event 1</div>
            <div className={css.item56}>56 Event 2</div>
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