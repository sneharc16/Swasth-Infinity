import CustomPatterns from '../components/dietcards/dietcards';  
import Navbar from '../components/Navbar/navbar';  
import Card from '../components/dietlink/card';

const Cards = () => {
  return (
    <>
    <div style={{ display: 'grid', gridTemplateColumns: '20% 80%' }}>
      <Navbar/>
      <CustomPatterns/>
    </div>
    <Card/>
    </>
  );
};

export default Cards;
