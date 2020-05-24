import React from 'react';
import {NavLink} from 'react-router-dom';
import css from '../styles/mentor.module.css';
import NavbarMember from './NavbarMember';
import Footer from './Footer';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.png';
import pic4 from '../images/pic4.png';
import liz from '../images/liz.jpg';
import jen from '../images/jen.jpg';
import sam from '../images/sam.jpg';
import event1 from '../images/event1.png';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpeg';
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
              <li className={css.list}>Tags</li>
              <li className={css.list}>Front End</li>
              <li className={css.list}>Back End</li>
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

{/* Events */}
          <div className={css.item54}>
            <p className={css.eventTitle}>Events & Workshops with Sophia
              <span className={css.floatRight}>Filter by Upcoming Events</span>
            </p>
          </div>

          <div className={css.item55}>
            <div className={`${css.eventWrap} ${css.floatRight}`}>
              <div className={css.eventPicWrap}>
                <img src={event3} alt="event" className={css.eventPic} />
              </div>
              <p className={css.redText}>Tues, 10:00am 5/5</p>
              <p className={css.eventText}>Speaker seriew for business leaders</p>
            </div>
          </div>

          <div className={css.item56}>
            <div className={css.eventWrap}>
              <div className={css.eventPicWrap}>
                <img src={event2} alt="event" className={`${css.eventPic}`} />
              </div>
              <p className={css.redText}>Wed, 9:00am 5/12</p>
              <p className={css.eventText}>Networking series for business leaders</p>
             </div>
            <div className={css.viewEvent}>View More Events</div>
          </div>

          <div className={css.item57}>
            <div className={`${css.eventWrap} ${css.floatLeft}`} >
              <div className={css.eventPicWrap}>
                <img src={event1} alt="event" className={`${css.eventPic}`} />
              </div>
              <p className={css.redText}>Mon, 11:00am 5/19</p>
              <p className={css.eventText}>Leadership series for Product managers</p>
            </div>
          </div>

          <div className={css.item58}>
            <div className={css.eventTitle}>Recommendations</div>
          </div>

{/* Liz */}
          <div className={css.item59}>
            <div className={`${css.recommend} ${css.one}`}>

              <div className={css.commentWrap}>
                <p className={css.comment}>
                  {`“OMG, i just love her.I feel, you are never too experienced to be mentored!"`}
                </p>
                <p className={css.like}>
                  <span className={css.heart}>&#9829;</span>21 Likes
                </p>
              </div>

              <div className={css.mentee}>
                <div className={css.profileCrop}>
                  <img src={liz} alt="liz" className={`${css.profilePic} ${css.marginLeft}`} />
                </div>
                <p className={css.nameTitle}>
                  Liz Doe <br />Software Engineer
                </p>
              </div>
            </div>
          </div>

{/* Jen */}
          <div className={css.item60}>
            <div className={`${css.recommend} ${css.two}`}>

              <div className={css.commentWrap}>
                <p className={css.comment}>
                  {'“At first, I was very stubborn. But I have to admit that the rewritten piece...'}
                </p>
                <p className={css.like}>
                  <span className={css.heart}>&#9829;</span>21 Likes
                </p>
              </div>

              <div className={css.mentee}>
                <div className={css.profileCrop}>
                  <img src={jen} alt="jen" className={css.jen}  />
                </div>
                <p className={css.nameTitle}>
                  Jen Doe <br />Jr. Software Engineer
                </p>
              </div>
            </div>
          </div>

{/* Sam */}
          <div className={css.item61}>
            <div className={`${css.recommend} ${css.three}`}>
              <div className={css.commentWrap}>
                <p className={css.comment}>
                  {'“Sophia really helped me see which skills I could upgrade and the best way...'}
                </p>
                <p className={css.like}>
                  <span className={css.heart}>&#9829;</span>21 Likes
                </p>
              </div>
              <div className={css.mentee}>
                <div className={css.profileCrop}>
                  <img src={sam} alt="sam" className={css.jen}  />
                </div>
                <p className={css.nameTitle}>
                  Sam Doe <br />Jr. Web Developer
                </p>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    )
  }
}

export default Mentor;