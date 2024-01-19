import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

export default function Plants({data}) {
  const d = data.allMarkdownRemark;
  const h = d.edges;

  return <div >
      <Helmet>
        <title>Butterflies | Garden Project</title>
        <meta name="description" content="These are some of my latest projects." />
        <meta name="theme-color" content="red" />
      </Helmet>
<Layout><div className="h-pad plants-container" style={{background: "#2A094B",}}>
  {
    (() => {
      const sortedItems = [...h].sort((a, b) => a.node.frontmatter.commonName.localeCompare(b.node.frontmatter.commonName));
      return sortedItems.map((item) => (
        <a className="flower-container" href={item.node.fields.slug} >
          <div>
            <img width="100%" alt="something" src={item.node.frontmatter.imageOne.publicURL} />
          </div>

        </a>
      ));
    })()
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