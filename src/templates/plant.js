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

import PlantData from '../components/PlantData'


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
  slug,
  interestingFacts,
  reasonsToAvoid,
}) => {
  const PostContent = contentComponent || Content;
  // Helper function to shuffle an array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}


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
<PlantData render={plants => {
  // First, exclude the current item
  const filteredPlants = plants.filter(item => item.node.fields.slug !== slug);

  // Shuffle the array of filtered plants
  shuffleArray(filteredPlants);

  // Slice the first 4 items from the shuffled array
  const selectedPlants = filteredPlants.slice(0, 4);

  return (
    <div className='h-pad' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px" }}>
      {selectedPlants.map((item) => (
        <a className="flower-container" href={item.node.fields.slug} style={{
          borderColor: item.node.frontmatter.color, position: "relative", backgroundImage: `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${item.node.frontmatter.imageOne.publicURL}')`,
          borderRadius: "25px", height: "265px", backgroundPosition: "center", backgroundSize: "cover"
        }}>
          <div>
            <h3>{item.node.frontmatter.commonName}</h3>
            <p>{item.node.frontmatter.scientificName}</p>
          </div>
        </a>
      ))}
    </div>
  );
}} />

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
const PlantPost = ({ data, pageContext }) => {
  const { markdownRemark: post } = data;
  const { slug } = pageContext; //

  return (
<div >

      <PlantTemplate
      slug={slug}
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
      fields{
        slug
      }
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