import React from "react";
import PropTypes from "prop-types";

import { graphql, Link } from "gatsby";
import Layout from "../components/layout2";
import Content, { HTMLContent } from "../components/Content";


// eslint-disable-next-line

export const ButterflyTemplate = ({
  content,
  contentComponent,
  commonName,
  latinName,
  color,
  family,
  description,
  maleVsFemale,
  interestingFacts,
  caterpillarDescription,
  eggDescription,
  chrysalisDescription,
  hostPlant,
  hostPlantDescription,
  migration,
  lifeCycleDescription,
  matingBehavior,
  clutchSize,
  distribution,
  flightSpeed,
  conservationStatus,
  culturalSignificance,
  predatorsAndThreats,
  imageOne,

  helmet,


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

        <p style={{padding: "2rem 0"}}>{description}</p>

        </div>
        </div>
        <div className="col-5" >
        <img className="h-image" src={imageOne} alt={commonName} width="100%"/>
<p><span className="bold">Family: </span>{family}</p>


        </div>
        </div>

       <div className="flex h-pad gap-1 info"  style={{alignItems: "center"}}>
       <div className="col-6">

            </div>



<div className="web-content">
<PostContent content={content} />
</div>

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
    // ... other propTypes definitions based on the categories
  };

  const ButterflyPost = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
      <div>
        <ButterflyTemplate
          content={post.html}
          latinName={post.frontmatter.latinName}
          family={post.frontmatter.family}
          commonName={post.frontmatter.commonName}
          color={post.frontmatter.color}
          description={post.frontmatter.description}
          imageOne={post.frontmatter.imageOne.publicURL}
          // ... pass other props from the markdownRemark
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
          imageOne {
            publicURL
          }

        }
      }
    }
  `;