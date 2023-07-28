import React, { useState } from 'react';
import FlipCard from './flipCard';

const FlipCardContainer = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const artcards = [
    {
      title: 'Card 1',
      link: 'https://example.com/card1',
    },
    {
      title: 'Card 2',
      link: 'https://example.com/card2',
    },
    {
      title: 'Card 3',
      link: 'https://example.com/card3',
    },
  ];
  const handleCardClick = (index) => {
    if (index === flippedIndex) {
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  return (
    <div className="card-row">
      {artcards.map((card, index) => (
        <FlipCard
          key={index}
          title={card.title}
          link={card.link}
          image={card.link}
          isFlipped={index === flippedIndex}
          onClick={() => handleCardClick(index)}
        />
      ))}
    </div>
  );
};

export default FlipCardContainer;