import CustomPatterns from '../components/dietcards/dietcards';  
import Navbar from '../components/Navbar/navbar';  
import Card from '../components/dietlink/card';

const Cards = () => {
  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: '15% 85%' }}>
      <Navbar/>
      <div>
      <Card/>
      <CustomPatterns/>
      </div>
    </div>
    </>
  );
};

export default Cards;
