/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import './App.css';
import useSound from 'use-sound';

function CardComponent(props) {
//   const participantDetails = props
const {name, source, des,sound, gifImage, isGif}= props
const [play] = useSound(sound,{ interrupt: true });
useEffect(() => {
 play()
}, [sound]);



  return (
    <div className="card farmer-card" style={{}}>
      <div className="card-body">
      <div className='info'>
          <h2>{name}</h2>
          </div>
          <div >
            <hr
              style={{
                color: 'gray',
                backgroundColor: 'gray',
                height: 1
              }}
            />
            <div style={{display:'flex', alignItems:'center', justifyContent:'center',textAlign:'center'}}>
        <div className="profile-image" style={{backgroundColor:'aliceblue', borderRadius:'50px',
              height:'100px', width:'100px'}}>
                {isGif?
                  <img style={{width:'100%', height:'100%', borderRadius:'50%'}}
                  src={gifImage} alt="Profile" />:
          <img className="moveArrow"  src={source} alt="Profile" />
                }
          
        </div>
        </div>

        <div >
          {/* <div className="participantName info">{participantDetails?.farmer?.name}</div> */}

     
            <div style={{ display: 'block', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <h6>{des}</h6>
            </div>
            <div className='info'>
            {/* <Button className="presButton" variant="success" style={{ textDecoration: "none" }}>
              <div>View More</div>
            </Button> */}
            <button style={{backgroundColor:'green', borderRadius:'10px',borderWidth:'1px', padding:'6px'}}>
            <div style={{color:'white'}}>View More</div>
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardComponent;