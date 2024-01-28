import React from "react";
import PropTypes from "prop-types";


import { graphql } from "gatsby";
import Layout from "../components/layout2";
import Content, { HTMLContent } from "../components/Content";
import soil from '../images/soil.png'
import water from '../images/water-drop.png'
import sun from '../images/sun.png'
import propagate from '../images/propagate.png'
import fertilizer from '../images/water.png'


// eslint-disable-next-line
export const PlantTemplate = ({
  content,
  contentComponent,
  commonName,
  otherNames,
  scientificName,
  family,
  size,
  hostTo,
  zones,
  toxic,
  lifespan,
  description,
  waterNeeds,
  sunNeeds,
  fertilizerNeeds,
  soilNeeds,
  propagation,
  bestPlace,
  pestsAndPrevention,
  similarFloridaNativePlants,
  companionFloridaNativePlants,
  imageOne,
  imageTwo,
  imageThree,
  helmet,
  color,
  interestingFacts,
  reasonsToAvoid,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div style={{overflowX: "hidden"} }>
      <Layout>
      {helmet || ""}


            <div className="flex gap-1 pad-top h-pad" style={{alignItems: "center"}}>
                <div className="col-7" style={{position: "relative"}}>
                <div className="butterfly-name">
        <h1 style={{paddingBottom: "1rem", color:" black"}}>{commonName}</h1>
        <h2 className="sci-name" style={{ backgroundColor: color}} >{scientificName}</h2>
        </div>
        <img className="h-image" src={imageOne} alt={commonName} style={{borderWidth: "10em", borderColor: color}} width="100%"/>


        </div>
        <div className="col-5 stats">

<p><span className="bold">Family: </span>{family}</p>
<p><span className="bold">Size: </span>{size}</p>
<p  style={{ display: hostTo === "none" ? "none" : "block" }}><span className="bold">Host to: </span>{hostTo}</p>
<p><span className="bold">Zones: </span>{zones}</p>
<p style={{ background: lifespan === "Perennial" ? "" : "purple" }} className="lifespan">{lifespan}</p>
<div  className={toxic === "No" ? "safe" : "toxicity" }>
  <p style={{color: "red", display: toxic === "No" ? "none" : "block" }}><b>Toxicity</b></p>
<p style={{color: toxic  === "No" ? "green" : "red"}}>{toxic === "No" ? "Non-Toxic" : toxic }</p>
</div>
        </div>
        </div>
        <div className="flex gap-1 b-pad h-pad" style={{alignItems: "center"}}>
                <div className="col-7" style={{position: "relative"}}>


<p style={{padding: "2rem 0"}}>{description}</p>
<p><span className="bold">Other Common Names: </span>{otherNames}</p>
</div></div>

        <div className=" flex-5 h-pad " style={{backgroundColor: color}}>


        <div className="needs">
    <div style={{display: "flex", flexDirection: "row"}}>
        <h3>Water</h3>
        <img style={{width: "60px"}} src={water} alt="logo"/>
    </div>
    <p>{waterNeeds}</p>
</div>

<div className="needs">
    <div style={{display: "flex", flexDirection: "row"}}>
        <h3>Sun</h3>
        <img style={{width: "60px"}} src={sun} alt="logo"/>
    </div>
    <p>{sunNeeds}</p>
</div>

<div className="needs">
    <div style={{display: "flex", flexDirection: "row"}}>
        <h3>Fertilizer</h3>
        <img style={{width: "60px"}} src={fertilizer} alt="logo"/>
    </div>
    <p>{fertilizerNeeds}</p>
</div>

<div className="needs">
    <div style={{display: "flex", flexDirection: "row"}}>
        <h3>Soil</h3>
        <img style={{width: "60px"}} src={soil} alt="logo"/>
    </div>
    <p>{soilNeeds}</p>
</div>

<div className="needs">
    <div style={{display: "flex", flexDirection: "row"}}>
        <h3>Propagation</h3>
        <img style={{width: "60px"}} src={propagate} alt="logo"/>
    </div>
    <p>{propagation}</p>
</div>





</div>
<div >



<div>
<PostContent content={content} />
</div>

</div>
            </Layout>

    </div>
  );
};

PlantTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  color: PropTypes.string,


  helmet: PropTypes.object,
};

const PlantPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
<div >

      <PlantTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      commonName={post.frontmatter.commonName}
      otherNames={post.frontmatter.otherNames}
      scientificName={post.frontmatter.scientificName}
      family={post.frontmatter.family}
      size={post.frontmatter.size}
      hostTo={post.frontmatter.hostTo}
      zones={post.frontmatter.zones}
      toxic={post.frontmatter.toxic}
      lifespan={post.frontmatter.lifespan}
      waterNeeds={post.frontmatter.waterNeeds}
      sunNeeds={post.frontmatter.sunNeeds}
      fertilizerNeeds={post.frontmatter.fertilizerNeeds}
      soilNeeds={post.frontmatter.soilNeeds}
      propagation={post.frontmatter.propagation}

      imageOne={post.frontmatter.imageOne.publicURL}

      color={post.frontmatter.color}


      />

    </div>
  );
};

PlantPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default PlantPost;

export const pageQuery = graphql`
  query PlantPostByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        commonName
        otherNames
        scientificName
        family
        size
        hostTo
        zones
        toxic
        lifespan
        description
        waterNeeds
        sunNeeds
        fertilizerNeeds
        soilNeeds
        propagation

        color

        imageOne {
          publicURL
        }
      }
    }
  }
`;