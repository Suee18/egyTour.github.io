import React from 'react';
import './landing_message_styling.css';
import clickingHand from '../images/click.gif';
import dotsSS from '../images/Screenshot 2024-04-28 051325.png';
import guideSS_GIF from '../images/guideSS_GIF.gif';
import guidevideo from '../images/guideVideo.mp4';
const GuideMessageLayer = ({ onGotItClick }) => {
  return (
    <div className="theAboveAll">
      <div className="guidanceLayer">
        <div className='guidanceElements'>
          <p className="guidanceParagraph">
            Ahlan wa Sahlan! Welcome to Your Journey Through Egypt! 🌍✨

            Embark on a captivating voyage across the timeless landscapes of Egypt by a click from your place. To wander through , please use the buttons labeled with the aeroplane ✈️ as the video below. 🠗

            Uncover the mysteries and marvels of Egypt—each button press !

          </p>
          {/* <img src={guideSS_GIF} alt="Egypt Animated" className="clickGIF"/> */}

        <div className='vidG'> 
        <video className="GuideVideo" controls>
            <source src={guidevideo} type="video/mp4" />
            issue with displaying guidance video
          </video><img src={clickingHand} alt="Egypt Animated" className="clickGIF"/>
           {/*  <img src={dotsSS} alt="Egypt Animated" className="navigationDotsSS"/> */}

          </div> 
<div >
          <button className="gotItButton" onClick={onGotItClick}>
            Begin Your Adventure</button>
        </div></div>
      </div>
    </div>
  );
};

export default GuideMessageLayer;
