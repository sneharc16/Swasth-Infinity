import React, { useRef } from 'react'; 
import Navbar from '../components/Navbar/navbar';  
import YourComponent from '../components/sustain/card';
import video from '../assets/treeVideo.mp4';
import poster from '../assets/poster.png';
import '../App.css';

const Card = () => {
  const videoRef = useRef(null);

  // Function to handle button click and redirect
  const handleButtonClick = () => {
    window.location.href = 'aframe-environment-component-master/index.html';  // Replace with correct path
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <div style={{height:"100vh",top:0,position:"sticky"}} >
      <Navbar />
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div className='videodiv' style={{display:'flex' , flexDirection:'row'}}>
          <video 
            className='video'
            ref={videoRef}
            width="100%" 
            loop
            autoPlay
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div>
            <h1 className='hstyle' style={{ marginTop:'140px', marginLeft:'80px', color:'blueviolet' }}>
              Avail sustain points to plan a tree.
            </h1>
            <button 
              onClick={handleButtonClick} 
              className='playbtn' 
              style={{ width:'100px', height:'40px', marginLeft:'100px', borderRadius:'15px', background:'blueviolet', color:'white' }}
            >
              Avail Points
            </button>
          </div>
        </div>
        {/* YourComponent below the video */}
        <div style={{ flex: 1 }}>
          <YourComponent />
        </div>
      </div>
    </div>
  );
};

export default Card;
