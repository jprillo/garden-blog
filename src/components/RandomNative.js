import React from 'react';

// Helper function to shuffle an array
const shuffleArray = (array) => {
  const newArray = array.slice(); // Make a shallow copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
};

const RandomNative = ({ items, currentItemId }) => {
  // Filter out the current item and shuffle
  const filteredItems = items.filter(item => item.node.fields.slug !== currentItemId);
  const shuffledItems = shuffleArray(filteredItems);

  // Select the first 4 items from the shuffled array
  const displayItems = shuffledItems.slice(0, 4);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px"}}>
      {displayItems.map((item) => (
        <a className="flower-container" href={item.node.fields.slug} aria-label={`Learn more about ${item.node.frontmatter.commonName}`} style={{
          borderColor: item.node.frontmatter.color,
          position: "relative",
          backgroundImage: `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${item.node.frontmatter.imageOne.publicURL}')`,
          borderRadius: "25px",
          height: "265px",
          backgroundPosition: "center",
          backgroundSize: "cover"
        }}>
          <div>
            <h3>{item.node.frontmatter.commonName}</h3>
            <p>{item.node.frontmatter.scientificName}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default RandomNative;
