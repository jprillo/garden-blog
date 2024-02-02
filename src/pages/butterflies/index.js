import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

export default function Plants({data}) {
  const d = data.allMarkdownRemark;
  const h = d.edges;
  const sortedItems = [...h].sort((a, b) => a.node.frontmatter.commonName.localeCompare(b.node.frontmatter.commonName));

  return <div className="bg-color">
      <Helmet>
        <title>Butterflies | Florida Butterfly Gardening</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
<Layout>-
<div className="h-pad bg-color pad-top">

<h1 style={{  textAlign: "center", color: "#D3F9C9"}}>Florida Butterflies</h1>

  <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px"}}>
  {

   sortedItems.map((item) => (
        <a className="flower-container " href={item.node.fields.slug}  aria-label={`Learn more about ${item.node.frontmatter.commonName}`}  style={{

          borderColor: item.node.frontmatter.color,  backgroundImage:  `linear-gradient(179.83deg, rgba(0, 0, 0, 0) -2.09%, rgba(0, 0, 0, 0.8) 106.17%), url('${item.node.frontmatter.imageOne.publicURL}')`,
         borderRadius: "25px", height: "265px", backgroundPosition: "center", backgroundSize: "cover" }} >
<div>
              <h3 >{item.node.frontmatter.commonName}</h3>
              <p >{item.node.frontmatter.latinName}</p>
              </div>

        </a>
      ))
   }
</div>
</div>
    </Layout>


  </div>
}


export const query = graphql`

query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "butterfly"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            commonName
            latinName
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