import React, { useState } from 'react';
import CardOne from '../../components/cardOne'

import animal from '../../images/art-images/animal.png'
import clown from '../../images/art-images/clown-family.png'
import dumbo from '../../images/art-images/cometh-dumbo.png'
import satan from '../../images/art-images/cometh-satan.png'
import dog from '../../images/art-images/dirty-old-dog.png'
import sun from '../../images/art-images//diva-sun.png'
import prison from '../../images/art-images/dudes-in-prison.png'
import sauron from '../../images/art-images/eye-of-saurananas.png'




function ArtLinksContainer() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const artcards = [
    {
      title: 'Animal',
      link: animal,
      description: "This is a vector drawing of Animal"
    },
    {
      title: 'Clown Family',
      link: clown,
      description: "This is my family. A bunch of clowns."
    },
    {
      title: 'Comethazine on Parade',
      link: dumbo,
      description: "Dumbo drunk except Comethazine"
    },
    {
      title: 'Comethazine',
      link: satan,
      description: "Comethazine vector drawing over a pentagram"
    },
    {
      title: 'Dirty Old Dog',
      link: dog,
      description: "Vector drawing of trailer park boys after dancing with a dog. "
    },
    {
      title: 'Guys in Prison',
      link: prison,
      description: "This is a tribute I made to the worst line in any movie."
    },
    {
      title: 'Sun',
      link: sun , 
      description: "This is the sun on my website Jason Weather"
    },
    {
      title: 'Sauronanas',
      link: sauron,
      description: "This is the eye of Sauron except the eye is a banana."
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
  <div className="art-links-container">
   {artcards.map((card, index) => (
        <CardOne
          key={index}
          title={card.title}
          link={card.link}
          image={card.link}
          description={card.description}
          isFlipped={index === flippedIndex}
          onClick={() => handleCardClick(index)}
        />
      ))}
</div>
  );
}

export default ArtLinksContainer;
