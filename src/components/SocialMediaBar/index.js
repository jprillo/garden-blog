import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import github from '../../images/github-negative.png'


import twitter from '../../images/twitter.png'


export default function SocialMediaBar() {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "web-project"}}}) {
            edges {
              node {
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  description
                  tags
                  featuredImage {
                    publicURL
                  }
                }
              }
            }
          }
    }
  `)
  return (
    <div className="social-media-bar">
    <Link to={data.allMarkdownRemark.edges[0].node.title}> <img  src={github}alt="this is a hero" /></Link>
    <Link to="/"> <img  src={twitter}alt="this is a hero" /></Link>
    <Link to="/"> <img  src={github}alt="this is a hero" /></Link>
  </div>
  )
}
