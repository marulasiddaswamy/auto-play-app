/* eslint-disable react-hooks/exhaustive-deps */
import React,{useEffect} from 'react';
import './App.css';
import useSound from 'use-sound';

function CardComponent(props) {
//   const participantDetails = props
const {name, source, des,sound, gifImage, isGif,index,count}= props
const [play,{ stop }] = useSound(sound,{ interrupt: true },{ volume: 0.01 });
useEffect(() => {
 play()
}, [index===count]);



  return (
    <div className="" style={{}}>
      {/* <div className="card-body">
      <div className='info'> */}
          {/* <h2>{name}</h2> */}

            <div style={{display:'flex', alignItems:'center', justifyContent:'center',textAlign:'center'}}>
        {/* <div className="profile-image" style={{ borderRadius:'50px',borderColor:'gray',borderWidth:'1px',backgroundColor:'aliceblue',
              height:'100px', width:'100px',}}> */}
                {index===count?
                 <div className="profile-image" style={{ borderRadius:'60px',borderColor:'gray',borderWidth:'1px',backgroundColor:'aliceblue',
                 height:'120px', width:'120px',}}>
                  <img style={{width:'100%', height:'100%', borderRadius:'50%'}}
                  src={gifImage} alt="Profile" onClick={stop()}/>
                  <h6 style={{color:'green'}}>{name}</h6>
                  </div>:
                   <div className="profile-image" style={{ borderRadius:'50px',borderColor:'gray',borderWidth:'1px',backgroundColor:'aliceblue',
              height:'100px', width:'100px',}}>
          <img className="" style={{width:'100%', height:'100%',}} src={source} alt="Profile" />
          </div>
                }
          
        {/* </div> */}
        </div>

        <div >
          {/* <div className="participantName info">{participantDetails?.farmer?.name}</div> */}

     
            {/* <div style={{ display: 'block', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
            <h6>{des}</h6>
            </div> */}
            {/* <div className='info'> */}
            {/* <Button className="presButton" variant="success" style={{ textDecoration: "none" }}>
              <div>View More</div>
            </Button> */}
            {/* <button style={{backgroundColor:'green', borderRadius:'10px',borderWidth:'1px', padding:'6px'}}>
            <div style={{color:'white'}}>View More</div>
            </button> */}
          {/* </div> */}
          </div>
        {/* </div>
      </div> */}
    </div>
  );
}

export default CardComponent;