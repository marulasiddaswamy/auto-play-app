import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import autoPlayImage from './assets/autoPlayImage.png'
import tomato_Leaf from './assets/tomato_Leaf.png'
import tomato_root from './assets/tomato_root.png'
import tomatoWarm1 from './assets/tomatoWarm1.png'
import tomatoStem from './assets/tomatoStem.png'
import whiteFlies from './assets/White-flies.png'
import tOmatoThrips from './assets/TOmato-Thrips.png'
import pinworm from './assets/Pinworm.png'
import fruitBorer from './assets/Fruit-Borer.png'
import Spidermite from './assets/Spidermite.png'
import testImages from './assets/testImages.png'
import honeybees from './assets/honeybees.mp3'
import mosquito from './assets/mosquito.wav'
import birdswings from './assets/birds-wings.mp3'
import cartooninsect from './assets/cartoon-insect.wav'
import classicAlarm from './assets/classic-alarm.wav'
import CardComponent from './CardComponent';
import beeGif from './assets/beeGif.gif'
import QSunGif from './assets/QSunGif.gif'
import butterflyGif from './assets/butterflyGif.gif'
import JrcGif from './assets/JrcGif.gif'
import warmGif from './assets/warmGif.gif'
import spiderGif from './assets/spiderGif.gif'
const testautoplay = [
  {
    stage: 'Leaf Disease',
    des: 'This disease is caused by the fungi Alternaria linariae (formally known as A. solani) ',
    gif: whiteFlies,
    position:  { translateX: 750, translateY:100},
    linePosition:  { translateX: -200, translateY:100},
    blinkPosition:{ translateX: 650, translateY:90},
    sound:birdswings,
    gifImage:beeGif
  },
  {
    stage: 'Leaf Disease',
    des: 'This disease is caused by the fungi Alternaria linariae (formally known as A. solani)',
    gif: pinworm,
    position:  { translateX: 750, translateY:0},
    linePosition:  { translateX: -200, translateY:100},
    blinkPosition:{ translateX: 600, translateY:20},
    sound:honeybees,
    gifImage:butterflyGif
  },
  {
    stage: 'Fruit Disease',
    des: 'Buckeye rot is a disease of the fruit caused by the fungus Phytophthora nicotianae var. parasitica. ',
    gif: testImages,
    position:  { translateX: 180,translateY:150},
    linePosition:{ translateX: 200,translateY:55},
    blinkPosition:{ translateX: 480, translateY:180},
    sound:classicAlarm,
    gifImage:warmGif
  },
  {
    stage: 'Stem Disease',
    des: 'As the bacterial infection progresses, more of the main stem turns brown and dies.',
    gif: Spidermite,
    position:  { translateX: 170,translateY:250},
    linePosition:{ translateX: 200,translateY:100},
    blinkPosition:{ translateX: 530, translateY:310},
    sound:mosquito,
    gifImage:spiderGif
  },
  {
    stage: 'Root Disease',
    des: 'The soil-borne fungal disease corky root, caused by the fungus Pyrenochaeta lycopersici Schneider & Gerlach.',
    gif: tOmatoThrips,
    position:  { translateX: 750,translateY:250},
    linePosition:{ translateX: -200,translateY:110},
    blinkPosition:{ translateX: 600, translateY:350},
    sound:cartooninsect,
    gifImage:JrcGif
  },
];
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if(count<testautoplay.length-1)
    {
    const interval = setInterval(() => {
      console.log(count);
        setCount(count + 1);
    }, 3000);
      return () => clearInterval(interval);
}
}, [count]);

useEffect(() => {
  if(count===testautoplay.length-1){
    const interval = setInterval(() => {
        setCount(0);
    }, 3000);
      return () => clearInterval(interval);
  }
}, [count===testautoplay.length-1]);

  return (
    <div className="container1">
      <div  style={{position:'absolute',transform: `translate(${testautoplay[count]?.blinkPosition.translateX}px, 
              ${testautoplay[count]?.blinkPosition.translateY}px)`
      }}>
      <svg>
  <circle fill="#ff0000" stroke="none" cx="60" cy="60" r="12">
    <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
  </circle>
</svg>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <AutoPlayPage/> */}
      {/* <img
      source={autoPlayImage}
      style={{ width: "100%", height: "100%" , position:'absolute'}}
  // resizeMode='contain'
      /> */}
       <div style={{display:'flex', flexDirection:'row'}}>
      <div className='logoImage'>
      <img style={{width:'25%'
      // height:'100%'
     }}
                className='images' src={autoPlayImage}></img>
            </div>
            <div style={{position:'absolute',transform: `translate(${testautoplay[count]?.position.translateX}px, 
                  ${testautoplay[count]?.position.translateY}px)`
          }}>
            {/* <div
            style={{position:'relative',transform: `translate(${testautoplay[count]?.linePosition.translateX}px, 
              ${testautoplay[count]?.linePosition.translateY}px)`
      }}
            >
            <hr
              style={{
                color: 'red',
                height: 0.2,
                width:'100px',
              }}
            />
            </div> */}
         <CardComponent
          source={testautoplay[count]?.gif}
          name={testautoplay[count]?.stage}
          des={testautoplay[count]?.des}
          sound={testautoplay[count]?.sound}
          gifImage={testautoplay[count]?.gifImage}
          isGif={true}
          />
          
    </div>
    
    </div>

    </div>
  );
}

export default App;
