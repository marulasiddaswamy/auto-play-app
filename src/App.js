/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import autoPlayImage from './assets/autoPlayImage.png'
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
import thrips from './assets/thrips.mp3'
import CardComponent from './CardComponent';
import beeGif from './assets/beeGif.gif'
import QSunGif from './assets/QSunGif.gif'
import butterflyGif from './assets/butterflyGif.gif'
import JrcGif from './assets/JrcGif.gif'
import warmGif from './assets/warmGif.gif'
import spiderGif from './assets/spiderGif.gif'
const testautoplay = [
  {
    stage: 'white Flys',
    des: 'This disease is caused by the fungi Alternaria linariae (formally known as A. solani) ',
    gif: whiteFlies,
    position:  { translateX: 730, translateY:180},
    linePosition:  { translateX: -200, translateY:100},
    blinkPosition:{ translateX: 650, translateY:90},
    sound:birdswings,
    gifImage:beeGif
  },
  {
    stage: 'Pinworm',
    des: 'This disease is caused by the fungi Alternaria linariae (formally known as A. solani)',
    gif: pinworm,
    position:  { translateX: 750, translateY:0},
    linePosition:  { translateX: -200, translateY:100},
    blinkPosition:{ translateX: 600, translateY:20},
    sound:honeybees,
    gifImage:butterflyGif
  },
  {
    stage: 'Fruit Borer',
    des: 'Buckeye rot is a disease of the fruit caused by the fungus Phytophthora nicotianae var. parasitica. ',
    gif: testImages,
    position:  { translateX: 410,translateY:180},
    linePosition:{ translateX: 200,translateY:55},
    blinkPosition:{ translateX: 480, translateY:180},
    sound:thrips,
    gifImage:warmGif
  },
  {
    stage: 'Stem Disease',
    des: 'As the bacterial infection progresses, more of the main stem turns brown and dies.',
    gif: Spidermite,
    position:  { translateX: 380,translateY:360},
    linePosition:{ translateX: 200,translateY:100},
    blinkPosition:{ translateX: 530, translateY:310},
    sound:mosquito,
    gifImage:spiderGif
  },
  {
    stage: 'Thrips',
    des: 'The soil-borne fungal disease corky root, caused by the fungus Pyrenochaeta lycopersici Schneider & Gerlach.',
    gif: tOmatoThrips,
    position:  { translateX: 750,translateY:400},
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
       <div style={{display:'flex', flexDirection:'row'}}>
      <div className='logoImage'>
      <img style={{width:'25%'
     }}
                className='images' src={autoPlayImage}></img>
            </div>
           

            {testautoplay.map((data,index)=>{
              return(
                <div style={{position:'absolute',transform: `translate(${data?.position.translateX}px, 
                  ${data?.position.translateY}px)`
          }}>
                <CardComponent
          source={data?.gif}
          name={data.stage}
          des={data?.des}
          sound={data.sound}
          gifImage={data.gifImage}
          isGif={false}
          index={index}
          count={count}
          />
          </div>
              )

            })}
         
          
    
    </div>

    </div>
  );
}

export default App;
