//react imports
import React, { useState, useRef, createRef } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';



//imports of files 
import './egypt_slides';
import './egypt_slides_styling.css';

//imports of media 
import bg from '../images/theBg.png';
import pyramids from '../images/pyramids.png';
import sand from '../images/camlesCutOut.png';
import camles from '../images/camles.png';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const divRefs = useRef([createRef(), createRef(), createRef()]); // Creating refs for each div

  const scrollToDiv = (index) => {
    setActiveIndex(index);
    divRefs.current[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    
    <div className='theBigContainer'>
      
      <div className="navigationDots">
        {divRefs.current.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => scrollToDiv(index)}
          >
            {index === activeIndex ? <FontAwesomeIcon icon={faPlane} className="planeNavIcon" /> : ''}
          </span>
        ))}

      </div>


      {/* // pyramids Scene1 div */}
      <div className="pyramidsScreenDiv" ref={divRefs.current[0]} id="div1">

        <Parallax pages={2}>

          {/* parallax bachground */}
          <ParallaxLayer
            speed={0.1}
            factor={2}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
          </ParallaxLayer>

          {/* parallax elements */}
          <ParallaxLayer speed={0.3} offset={0.1}
          //  offset={0.1}> 
          >
            <h1 className="sceneTitle">The pyramids</h1>
          </ParallaxLayer>

          <ParallaxLayer offset={0.3} speed={0.15} className="parallax-layer-center">
            <article className="infoArticle">
              <p className="sceneParagraphInformation">
                Enveloped in the golden hues of an ancient sunset, the Pyramids of Giza stand not merely as structures
                but as timeless sentinels to history's magnificent tapestry. These colossal tombs, a testament to human ingenuity, transcend the label of a grave; they are a crossroads where tales of mythology, astronomy
                , and mathematics converge.
                With every stone etched they whisper stories of a civilization that viewed death not as an end but as a breathtaking beginning. Venture beyond the common narrative into the life of those who built them - a community
                ; they cast light on the ingenuity of our ancestors, challenging visitors to look closer and perceive beyond the ordinary, into the realm of the extraordinary.    </p>
            </article>
          </ParallaxLayer>


          <ParallaxLayer
            factor={2}
            offset={0.80}
            speed={0.4}
            style={{
              backgroundImage: `url(${pyramids})`,
              backgroundSize: '135% 60%',
              backgroundPosition: 'center',
            }}
          >
          </ParallaxLayer>



          <ParallaxLayer className='parallaxSceneElement'
            speed={0.1}
            offset={0.99}
            style={{
              backgroundImage: `url(${sand})`,
              backgroundSize: '100% 145%',
              backgroundPosition: 'center',
            }}>
          </ParallaxLayer>

          <ParallaxLayer className='parallaxSceneElement'
            speed={0.02}
            offset={0.99}
            style={{
              backgroundImage: `url(${camles})`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
            }}>
          </ParallaxLayer>
        </Parallax>
      </div>      {/* end of scene-- 1-- the pyramids */}


      {/* ****************************scene 2 ***************************************/}
      <div className="secondScreenDiv" ref={divRefs.current[1]} id="div2">
        <Parallax
          pages={2}
        >

          {/* parallax bachground */}
          <ParallaxLayer
            speed={0.1}
            style={{
              // backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
          </ParallaxLayer>
        </Parallax>
      </div>


      <div className="thirdScreenDiv" ref={divRefs.current[2]} id="div3">
      <label>screen three lhad ma tigi isa</label>

      </div>
    </div>

  );
}

export default App;
