import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

export default function Plants({data}) {
  const d = data.allMarkdownRemark;
  const h = d.edges;
  const sortedItems = [...h].sort((a, b) => a.node.frontmatter.commonName.localeCompare(b.node.frontmatter.commonName));

  return <div >
      <Helmet>
        <title>Butterflies | Florida BUtterfly Gardening</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
<Layout>
<div className="h-pad" style={{background: "white", display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "50px", paddingBottom: "50px", gap: "3%"}}>
  {

   sortedItems.map((item) => (
        <a className="flower-container" href={item.node.fields.slug} style={{
          borderColor: item.node.frontmatter.color, position: "relative", backgroundImage: `url(${item.node.frontmatter.imageOne.publicURL})` ,
         borderRadius: "25px", height: "200px", backgroundPosition: "center", backgroundSize: "cover" }} >
       <div >
              <h3 style={{color: item.node.frontmatter.color, position: "absolute", top: 0}}>{item.node.frontmatter.commonName}</h3>

              </div>

        </a>
      ))
   }
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