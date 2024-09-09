import Navbar from '../components/Navbar/navbar';  
import YourComponent from '../components/sustain/card';

const card = () => {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <Navbar/>
      <YourComponent/>
    </div>
  );
};

export default card;
