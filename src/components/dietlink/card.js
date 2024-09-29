import React from 'react';
import './card.css'

function Card() {
  return (
    <div className="card11">
      <h4 className="card11-title">Food Recommendations</h4>
      <p className="card11-text">Click on the below button to generate the food recommendations on the basis of Dietary Preferences and Fitness Regime.</p>
      <button className="card11-button">
        <a href="https://huggingface.co/spaces/Shivya0410/Diet_Recommendation_System" target="_blank" rel="noopener noreferrer" className="card11-link">
          Generate
        </a>
      </button>
    </div>
  );
}

export default Card;
