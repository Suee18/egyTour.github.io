import logo from './logo.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

import './App.css';
// import sand from './sand.png';
// import pyramid from './pyramids.png';
//import sky from './sky.png';
import bg from './images/theBg.png';

function App() 
{
  return 
  (
    <div className="App">

      <Parallax pages={5} >

        <ParallaxLayer className='backGround'
          speed={0.2}
          factor={2}
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <h1>BLUES</h1>
        </ParallaxLayer>

         

      </Parallax>

      FW REACT
    </div>
  );
}

export default App;
