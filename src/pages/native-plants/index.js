import React, { useState } from "react";
import Layout from '../../components/layout2';
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet';

export default function Plants({ data }) {
  const plants = data.allMarkdownRemark.edges;
  const [filter, setFilter] = useState('');
  const [showHostPlantsOnly, setShowHostPlantsOnly] = useState(false);

  const filteredPlants = plants.filter(({ node }) => {
    const isCommonNameMatch = node.frontmatter.commonName.toLowerCase().includes(filter.toLowerCase());
    const isHostPlant = node.frontmatter.hostTo !== "N/A";
    return isCommonNameMatch && (!showHostPlantsOnly || isHostPlant);
  });

  return (
    <div>
      <Helmet>
        <title>Florida Butterfly Gardening</title>
        <meta name="description" content="Turn your backyard into a butterfly paradise by using plants native to Florida." />
        <meta name="theme-color" content="white" />
      </Helmet>
      <Layout>
        <div className="h-pad bg-color pad-top">
          <h1 style={{ textAlign: "center", color: "#D3F9C9" }}>Native Florida Plants</h1>
          <input
            type="text"
            placeholder="Search plants..."
            value={filter}
            onChange={e => setFilter(e.target.value)}
            style={{ display: "block", margin: "0 auto 20px", padding: "10px", width: "90%", maxWidth: "600px" }}
          />
          <button
            onClick={() => setShowHostPlantsOnly(!showHostPlantsOnly)}
            style={{ display: "block", margin: "10px auto", padding: "10px 20px" }}
          >
            {showHostPlantsOnly ? "Show All Plants" : "Show Only Host Plants"}
          </button>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px" }}>
            {filteredPlants.map(({ node }) => (
              <a className="flower-container" href={node.fields.slug} aria-label={`Learn more about ${node.frontmatter.commonName}`} style={{
                borderColor: node.frontmatter.color, position: "relative", backgroundImage: `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${node.frontmatter.imageOne.publicURL}')`,
                borderRadius: "25px", height: "265px", backgroundPosition: "center", backgroundSize: "cover"
              }}>
                <div>
                  <h3>{node.frontmatter.commonName}</h3>
                  <p>{node.frontmatter.scientificName}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
}

export const query = graphql`
query MyQuery {
  allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "plant"}}}) {
    edges {
      node {
        id
        fields {
          slug
        }
        frontmatter {
          commonName
          scientificName
          description
          color
          hostTo
          imageOne {
            publicURL
          }
        }
      }
    }
  }
}
`;
