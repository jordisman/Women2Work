import React from 'react';
import {NavLink} from 'react-router-dom';
import css from '../styles/member.module.css';
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

// How it works, view our Mentors

class Member extends React.Component {

  render() {
    return (
      <div>
        <NavbarMember />

        <div className={css.memberContainer}>

          <div className={css.item20}>

            <div className={css.topPart}>
              <div className={css.yellowCircleWrap}>
                <img src={yellowCircle} className={css.yellowCircle} />
              </div>

              <p className={css.hello}>How it works</p>
              <p className={css.topText}>
                We have over 500 mentors in our community now, and we’ve matched you with some potential mentors based on your interests.
              </p>
              <p className={css.viewMentor}>View our Mentors</p>
            </div>

          </div>


          {/* Jane' profile on the left */}
            <div className={css.item21}>
              <div className={css.janeProfile}>
                <div className={css.profileCrop}>
                  <img src={pic1} alt="" className={css.janePic} />
                </div>
                  <p className={css.nameTitle}>
                    Jane Doe <br />Jr. Software Engineer
                  </p>
                <div className={css.borderBottom}></div>
                <ul className={css.memberUl}>
                  <li className={css.memberLi}>My Mentors</li>
                  <li className={css.memberLi}>My Connections</li>
                  <li className={css.memberLi}>My Events</li>
                  <li className={css.memberLi}>My Groups</li>
                </ul>
              </div>
            </div>

          {/* Ads */}
          <div className={css.item23}></div>

          <div className={css.item24}>
            <div className={css.boxRed}>
              <div className={css.profileCrop}>
                <img src={pic2} alt="" className={`${css.janePic} ${css.marginLeft}`}  />
              </div>
                <p className={css.nameTitle}>
                  Jane Doe <br />Jr. Software Engineer
                </p>
                <div className={css.request}>Request</div>
            </div>
          </div>

          <div className={css.item25}>
            <div className={css.boxRed}>
              <div className={css.profileCrop}>
                <img src={pic3} alt="" className={css.janePic}  />
              </div>

                <p className={css.nameTitle}>
                  Jane Doe <br />Jr. Software Engineer
                </p>
                <div className={css.request}>Request</div>
            </div>
          </div>

          <div className={css.item26}>
            <div className={css.boxRed}>
              <div className={css.profileCrop}>
                <img src={pic4} alt="" className={`${css.janePic} ${css.marginLeft}`}  />
              </div>
                <p className={css.nameTitle}>
                  Jane Doe <br />Jr. Software Engineer
                </p>
                <div className={css.request}>Request</div>
              </div>
          </div>

          <div className={css.item27}>
            <div className={css.boxPink}>
              <div className={css.profileCrop}>
                <img src={pic5} alt="" className={`${css.janePic} ${css.marginLeft}`}  />
              </div>
                <p className={css.nameTitle}>
                  Jane Doe <br />Jr. Software Engineer
                </p>
                <div className={css.request}>Request</div>
              </div>
          </div>

          <div className={css.item28}>
            <div className={css.boxPink}>
              <div className={css.profileCrop}>
                <img src={pic6} alt="" className={css.janePic}  />
              </div>
                <p className={css.nameTitle}>
                  Jane Doe <br />Jr. Software Engineer
                </p>
                <div className={css.request}>Request</div>
            </div>
          </div>

          <div className={css.item29}>
            <div className={css.boxPink}>
              <div className={css.profileCrop}>
                <img src={pic7} className={css.janePic}  />
              </div>
                <p className={css.nameTitle}>
                  Jane Doe <br />Jr. Software Engineer
                </p>
                <div className={css.request}>Request</div>
            </div>
          </div>



          <div className={css.item30}>
            <div className={css.sponserTitle}>Sponsored Events by Dream Force </div>
            <img className={css.eventPic} src={event3} />
            <p className={css.eventText}>
              <span className={css.redText}>Tues, 10:00am 5/5</span><br /> Speaker series for business leaders
            </p>
          </div>

          <div className={css.item31}>
            <img className={css.eventPic2} src={event2} />
            <p>
              <span className={css.redText}>Tues, 10:00am 5/12</span><br />Networking series for business leaders
            </p>
          </div>

          <div className={css.item32}>
            <img className={css.eventPic1} src={event1} alt=""/>
            <p>
              <span className={css.redText}>Tues, 10:00am 5/19 </span><br />Leadership series for Product managers
            </p>
          </div>


          <div className={css.item33}>
            <img src={bubbles} alt="" className={css.bubbles} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Member;
