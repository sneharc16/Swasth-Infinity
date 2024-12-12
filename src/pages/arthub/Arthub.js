import { useEffect } from 'react';
import { Artmain } from "../../components/arthubmain/arthub"
import { Cards } from "../../components/arthubcards/cards"
import PostList from '../../components/PostList';
import AddPost from '../../components/AddPost';
import Navbar from '../../components/Navbar/navbar';
import BreathingMeditation from '../../components/mentalmed/circle';

export const Arthub = () => {
  useEffect(() => {
    const container = document.getElementById('container');
    if (container) {
        container.appendChild(Cards());
    }

    // Clean up function
    return () => {
        if (container) {
            container.innerHTML = ''; // Clear the container when component unmounts
        }
    };
}, []); 
    return (
        <>
        <div style={{display:'flex',}}>
          <div style={{height: '100vh',
            top: 0,
            position: 'sticky',
            zIndex: 1000, }}> 
       <Navbar />
       </div>
          <div className="App">
          <BreathingMeditation/>
      <main>
        <PostList />
        <AddPost />
      </main>
      
    </div>
    </div>
        </>
      )
}