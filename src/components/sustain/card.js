import React from 'react';
import './card.css'

function Card() {
  return (
    <div className='cards-in-set'>
    <div className="card10">
      <h4 className="card10-title">Carbon Footprint Counter</h4>
      <p className="card10-text">Click on the below button to checkout the daily carbon footprint generated based on various fitness activites.</p>
      <button className="card10-button">
        <a href="https://bcf4d70d2743803310.gradio.live/" target="_blank" rel="noopener noreferrer" className="card10-link">
          Calculate
        </a>
      </button>
    </div>
    <div className="card10">
    <h4 className="card10-title">Generate Sustain Points</h4>
    <p className="card10-text">Click on the below button to generate your daily sustain points to take one step ahed towards sustainability.</p>
    <button className="card10-button">
      <a href="https://36d2538d93f37d6159.gradio.live/" target="_blank" rel="noopener noreferrer" className="card10-link">
        Generate
      </a>
    </button>
  </div>
  </div>
  );
}

export default Card;
