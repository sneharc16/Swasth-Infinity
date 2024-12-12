import React from 'react';
import './card.css';
import { useTranslation } from 'react-i18next';

function Card() {
  const { t } = useTranslation();

  return (
    <div className="card11">
      <h4 className="card11-title">{t('card.title')}</h4>
      <p className="card11-text">{t('card.text')}</p>
      <button className="card11-button">
        <a 
          href="https://huggingface.co/spaces/Shivya0410/Diet_Recommendation_System" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="card11-link"
        >
          {t('card.button')}
        </a>
      </button>
    </div>
  );
}

export default Card;
