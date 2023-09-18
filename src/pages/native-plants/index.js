import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'
import BlogArticle from '../../components/blogArticleOne'


export default function Plants({data}) {
  const d = data.allMarkdownRemark;
  const h = d.edges;


  return <div >
      <Helmet>
        <title>Web Development | Jason Prillo</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>

<Layout>

<div className="h-pad" style={{display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "50px", paddingBottom: "50px", gap: "3%"}}>
{h.map((item) => (
            <a  className=" flower-container" href={item.node.fields.slug} style={{
            borderColor: item.node.frontmatter.color,
           borderRadius: "25px" }}>
            <div >
            <img width="100%" alt="somethong" src={item.node.frontmatter.imageOne.publicURL}/>
              </div>
<div >
              <h3 style={{color: item.node.frontmatter.color}}>{item.node.frontmatter.commonName}</h3>

              </div>

            </a>

))}


</div>
    </Layout>


  </div>
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
            description
            color
            imageOne {
                publicURL
             }
          }
        }
      }
    }
  }
`