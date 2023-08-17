import React from "react";
import PropTypes from "prop-types";

import { graphql } from "gatsby";
import Layout from "../components/layout2";
import Content, { HTMLContent } from "../components/Content";


// eslint-disable-next-line

export const ButterflyTemplate = ({
  content,
  contentComponent,
  commonName,
  otherNames,
  latinName,
  color,
  family,
  description,
  distribution,
  imageOne,
  size,
  host,
  helmet,
  interestingFactsOne,
  interestingFactsTwo,
  interestingFactsThree,
  migration,
  whereToFind,
  flightSpeed,
  conservationStatus,
  culturalSignificance,
  predatorsAndThreats,



}) => {

  const PostContent = contentComponent || Content;

  return (
    <div style={{overflowX: "hidden"} }>
      <Layout>
      {helmet || ""}


            <div className="flex gap-1 pad-top b-pad h-pad" style={{alignItems: "center"}}>
                <div className="col-7" style={{position: "relative"}}>

        <h1 style={{paddingBottom: "1rem"}}>{commonName}</h1>
        <h2 className="sci-name" style={{ backgroundColor: color}} >{latinName}</h2>



     <div >

        <p style={{padding: "3rem 0 .5rem"}}>{description}</p>
        <p style={{padding: ".5rem 0"}}><span className="bold">Family: </span>{family}</p>
        <p style={{padding: ".5rem 0"}}><span className="bold">Other Common Names: </span>{otherNames}</p>
<p style={{padding: ".5rem 0"}}><span className="bold">Size: </span>{size}</p>
<p style={{padding: ".5rem 0"}}><span className="bold">Host Plant: </span>{host}</p>
<p style={{padding: ".5rem 0"}}><span className="bold">Distribution: </span>{distribution}</p>
<p style={{padding: ".5rem 0"}}><span className="bold">Conservation Status:</span> {conservationStatus}</p>

        </div>
        </div>
        <div className="col-5" >
        <img className="h-image" src={imageOne} alt={commonName} width="100%"/>
        <p>Image Credit: Sara Perno</p>



        </div>

        </div>





       <div className="flex gap-1 pad-top b-pad h-pad" >




<div  className="web-content col-8">
<PostContent content={content} />
</div>
<div className="col-4">
  <div style={{border: "solid blue 2px"}}><h4 style={{color: "blue"}}>Did you Know?</h4><p>{interestingFactsTwo}</p></div>
  <div style={{border: "solid blue 2px"}}><h4 style={{color: "blue"}}>Did you Know?</h4><p>{interestingFactsThree}</p></div>
</div>
</div>
<div className="pad-top b-pad h-pad" style={{background: "green"}}>
{interestingFactsOne}
{culturalSignificance}


{migration}
{whereToFind}
{flightSpeed}

{culturalSignificance}
{predatorsAndThreats}
        </div>
            </Layout>

    </div>
  );
};
ButterflyTemplate.propTypes = {
    content: PropTypes.node.isRequired,
    contentComponent: PropTypes.func,
    latinName: PropTypes.string,
    family: PropTypes.string,
    commonName: PropTypes.string,
    description: PropTypes.string,
    color: PropTypes.string,
    otherNames: PropTypes.string,
    distribution: PropTypes.string,
    size: PropTypes.string,
    host: PropTypes.string,
    interestingFactsOne: PropTypes.string,
    interestingFactsTwo: PropTypes.string,
    interestingFactsThree: PropTypes.string,
    migration: PropTypes.string,
    whereToFind: PropTypes.string,
    flightSpeed: PropTypes.string,
    conservationStatus: PropTypes.string,
    culturalSignificance: PropTypes.string,
    predatorsAndThreats: PropTypes.string,
    imageOne: PropTypes.string,

    // ... other propTypes definitions based on the categories
  };

  const ButterflyPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
      <div>
        <ButterflyTemplate
          content={post.html}
          contentComponent={HTMLContent}
          latinName={post.frontmatter.latinName}
          family={post.frontmatter.family}
          commonName={post.frontmatter.commonName}
          color={post.frontmatter.color}
          description={post.frontmatter.description}
          imageOne={post.frontmatter.imageOne.publicURL}
          otherNames={post.frontmatter.otherNames}
          distribution={post.frontmatter.distribution}
          size={post.frontmatter.size}
          host={post.frontmatter.host}
          interestingFactsOne={post.frontmatter.interestingFactsOne}
          interestingFactsTwo={post.frontmatter.interestingFactsTwo}
          interestingFactsThree={post.frontmatter.interestingFactsThree}
          migration={post.frontmatter.migration}
          whereToFind={post.frontmatter.whereToFind}
          flightSpeed={post.frontmatter.flightSpeed}
          conservationStatus={post.frontmatter.conservationStatus}
          culturalSignificance={post.frontmatter.culturalSignificance}
          predatorsAndThreats={post.frontmatter.predatorsAndThreats}



        />
      </div>
    );
  };

  ButterflyPost.propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object,
    }),
  };

  export default ButterflyPost;

  export const pageQuery = graphql`
    query ButterflyPostByID($slug: String!) {
      markdownRemark(fields: { slug: { eq: $slug } }) {
        id
        html
        frontmatter {
          latinName
          family
          commonName
          description
          color
          otherNames
          distribution
          size
          host
          interestingFactsOne
          interestingFactsTwo
          interestingFactsThree
          migration
          whereToFind
          flightSpeed
          conservationStatus
          culturalSignificance
          predatorsAndThreats
          imageOne {
            publicURL
          }

        }
      }
    }
  `;