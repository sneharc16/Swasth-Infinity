import React from 'react';
import './card.css'

function Card() {
  return (
    <div className="card11">
      <h4 className="card11-title">Food Recommendations</h4>
      <p className="card11-text">Click on the below button to generate the food recommendations on the basis of Dietary Preferences and Fitness Regime.</p>
      <button className="card11-button">
        <a href="https://4c66fcee43c2099f0e.gradio.live/" target="_blank" rel="noopener noreferrer" className="card11-link">
          Generate
        </a>
      </button>
    </div>
  );
}

export default Card;
