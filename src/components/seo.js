/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function Seo({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            
            
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description


  const ldJson = {
    "@context": "http://www.schema.org",
    "@type": "WebPage",
    "@id":"https://formalflamingo.com/#webpage",
    "url": "https://formalflamingo.com",
    "name":"Palm Bay FL Web Design | Formal Flamingo",
    "isPartOf":{"@id":"https://formalflamingo.com"},
    "description":"Palm Bay Florida web design and development"
  
  };
  
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: "https://www.formalflamingo.com/static/cb3e2da9b55356a286ca1bcad7a91596/ccc01/flamingo.webp"
        },        

        {
          name: `google-site-verification`,
          content: `JA8lIlFfpwJ-MswIz19iWnjrBBsNl8cjYeCYWuyIFBE`,
        },
        
      ].concat(meta)}
    >

<script type="application/ld+json">{JSON.stringify(ldJson)}</script>

    </Helmet>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
