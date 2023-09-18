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
<Layout><div className="h-pad plants-container">
  {
    (() => {
      const sortedItems = [...h].sort((a, b) => a.node.frontmatter.commonName.localeCompare(b.node.frontmatter.commonName));
      return sortedItems.map((item) => (
        <a className="flower-container" href={item.node.fields.slug} style={{
          borderColor: item.node.frontmatter.color,
          borderRadius: "25px"
        }}>
          <div>
            <img width="100%" alt="something" src={item.node.frontmatter.imageOne.publicURL} />
          </div>
          <div>
            <h3 style={{ color: item.node.frontmatter.color }}>{item.node.frontmatter.commonName}</h3>
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