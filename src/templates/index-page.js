import React from 'react';
import { graphql } from "gatsby";
import { Helmet } from 'react-helmet';
import Hero from '../components/hero';
import Layout from '../components/layout2'

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
