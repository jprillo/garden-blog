import React from 'react';

const FlipCard = ({ title, link, isFlipped, onClick }) => {

  return (
    <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="front">
        <h2>{title}</h2>
      </div>
      <div className="back">
        <a href={link}>{link}</a>
      </div>
    </div>
  );
};

export default FlipCard;
