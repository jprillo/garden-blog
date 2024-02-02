import React from 'react';
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout2'
import ButterfliesData from '../components/ButterliesData'
import PlantData from '../components/PlantData'

export const IndexPageTemplate = ({
  headingOne,
  subheadingOne,
  heroButtonCtaOne,
  heroButtonCtaTwo,
  heroButtonLinkOne,
  heroButtonLinkTwo,
  image,
  helmet,
}) => {
  return (
    <div className='bg-color' style={{ position: "relative", overflowY: "hidden" }}>
      {helmet || ""}
      <Layout>
      <Hero
        headingOne={headingOne}
        subheadingOne={subheadingOne}
        heroButtonCtaOne={heroButtonCtaOne}
        heroImage={image}
        heroButtonCtaTwo={heroButtonCtaTwo}
        heroButtonLinkOne={heroButtonLinkOne}
        heroButtonLinkTwo={heroButtonLinkTwo}
      />

        <ButterfliesData render={sortedItems => (
      <div className='h-pad' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px"}}>
  {

   sortedItems.map((item) => (
        <a className="flower-container " href={item.node.fields.slug} style={{
          borderColor: item.node.frontmatter.color,  backgroundImage:  `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${item.node.frontmatter.imageOne.publicURL}')`,
         borderRadius: "25px", height: "265px", backgroundPosition: "center", backgroundSize: "cover" }} >
<div>
              <h3 >{item.node.frontmatter.commonName}</h3>
              <p >{item.node.frontmatter.latinName}</p>
              </div>

        </a>
              ))}
              </div>
          )} />


       <PlantData render={plants => (
                        <div className='h-pad' style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px" }}>
                            {plants.map((item) => (
            <a  className=" flower-container" href={item.node.fields.slug} style={{
              borderColor: item.node.frontmatter.color, position: "relative", backgroundImage:  `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${item.node.frontmatter.imageOne.publicURL}')` ,
             borderRadius: "25px", height: "265px", backgroundPosition: "center", backgroundSize: "cover" }}>

  <div >
                <h3 >{item.node.frontmatter.commonName}</h3>
                <p >{item.node.frontmatter.scientificName}</p>
                </div>

              </a>
          ))}
          </div>
      )} />
      </Layout>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const home = data.index;
  const h = home.frontmatter;
  return (
    <IndexPageTemplate
      headingOne={h.headingOne}
      subheadingOne={h.subheadingOne}
      heroButtonCtaOne={h.heroButtonCtaOne}
      heroButtonCtaTwo={h.heroButtonCtaTwo}
      heroButtonLinkOne={h.heroButtonLinkOne}
      heroButtonLinkTwo={h.heroButtonLinkTwo}
      image={h.heroImage.publicURL}
      headingTwo={h.headingTwo}
      headingThree={h.headingThree}
      headingFour={h.headingFour}
      helmet={
        <Helmet titleTemplate="%s | Blog">
          <title>{`${h.headingOne}`}</title>
          <meta name="description" content={`${h.subheadingOne}`} />
        </Helmet>
      }
    />
  )
}

export default IndexPage;

export const query = graphql`
  query($slug: String!) {
    index:  markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        headingOne
        subheadingOne
        heroButtonCtaOne
        heroButtonCtaTwo
        heroButtonLinkOne
        heroButtonLinkTwo
        heroImage {
          publicURL
        }
        headingTwo
        headingThree
        headingFour
      }
    }
  }
`;
