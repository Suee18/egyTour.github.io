import React from 'react';
import './landing_message_styling.css'; 
import clickingHand from '../images/click.gif';
import dotsSS from '../images/Screenshot 2024-04-28 051325.png';
import guideSS_GIF from '../images/guideSS_GIF.gif';
import guidevideo from '../images/guideVideo.mp4';
const GuideMessageLayer = ({ onGotItClick }) => {
  return (
    <div className="guidanceLayer">
      <div className='guidanceElements'>
        <p className="guidanceParagraph">
        definitely definitely definitely definitely STYLING WILL BE DONE TO ALL OF THAT...... Welcome to a small virtual wandering around Egypt. 
            use the aeroplane on the navigation dots to go from a place to another with a click of a button. literally.
            </p>
            {/* <img src={guideSS_GIF} alt="Egypt Animated" className="clickGIF"/> */}

            <img src={clickingHand} alt="Egypt Animated" className="clickGIF"/>
            <img src={dotsSS} alt="Egypt Animated" className="navigationDotsSS"/>

          <video className="GuideVideo" controls>
          <source src={guidevideo} type="video/mp4" />
          issue with displaying guidance video
        </video> 

        <button className="gotItButton" onClick={onGotItClick}>Got it</button>
      </div>
    </div>
  );
};

export default GuideMessageLayer;
