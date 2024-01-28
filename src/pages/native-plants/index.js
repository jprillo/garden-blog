import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'



export default function Plants({data}) {
  const d = data.allMarkdownRemark;
  const h = d.edges;


  return <div >
      <Helmet>
        <title>Florida Butterfly Gardening</title>
        <meta name="description" content="Turn your backyard into a butterfly paradise by using plants native to Florida, " />
        <meta name="theme-color" content="white" />
      </Helmet>

<Layout>

<div className="h-pad bg-color pad-top" >
<h1 style={{  textAlign: "center", color: "#D3F9C9"}}> Native Florida Plants</h1>
< div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", paddingTop: "20px", paddingBottom: "50px", gap: "20px"}}>
{h.map((item) => (
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
            scientificName
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