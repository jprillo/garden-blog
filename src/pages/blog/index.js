import React from "react"
import Layout from '../../components/layout2'
import { graphql} from "gatsby"
import { Helmet } from 'react-helmet'

import BlogArticle from '../../components/blogArticleOne'
import TagBar from '../../components/tagBar'


export default function Blog({data}) {
    const d = data.allMarkdownRemark;
    const h = d.edges[0].node.frontmatter
    const hslug = d.edges[0].node.fields.slug
    const f = d.edges[1].node.frontmatter
    const fslug = d.edges[1].node.fields.slug
    const t = d.edges[2].node.frontmatter
    const tslug = d.edges[2].node.fields.slug
    const htag = h.tags[0]
    const otherPosts = d.edges.slice(3)



  return <div >
      <Helmet>
        <title>Geeby | Gatsby Starter Blog</title>
        <meta name="description" content="VYNTRADE was founded in 2018 to offer consulting to Wine & Spirit Industry Companies.​" />
        <meta name="theme-color" content="black" />
      </Helmet>

<div >
<Layout color="ddd" >
  <div className="h-pad pad-top">
<TagBar/>
</div>
  <div className="flex h-pad"  >
    <div className="col-8-gap">
      <BlogArticle
      width = ""
      type = "feature"
      slug = {hslug}
      tag = {htag}
      title = {h.title}
      description = {h.description}
      featuredImage = {h.featuredImage.publicURL}
      />



    </div>
    <div className="col-4-gap column gap-2 padd" >
    <BlogArticle
     width = ""
      type = "normal"
      slug = {fslug}
      tag = {f.tags[0]}
      title = {f.title}
      description = {f.description}
      featuredImage = {f.featuredImage.publicURL}
      />

<BlogArticle
    width = ""
      type = "normal"
      slug = {tslug}
      tag = {t.tags[0]}
      title = {t.title}
      description = {t.description}
      featuredImage = {t.featuredImage.publicURL}
      />


    </div>
    </div>
    <div className="flex gap-2 h-pad b-pad" >
        {otherPosts.map((item) => (
          <div className="col-6">
  <BlogArticle
  width = "nnn"
  type = "normal"
  slug = {item.node.fields.slug}
  tag = {item.node.frontmatter.tags[0]}
  title = {item.node.frontmatter.title}
  description = {item.node.frontmatter.description}
  featuredImage = {item.node.frontmatter.featuredImage.publicURL}
  />
</div>
))}

      </div>
    </Layout>
</div>

  </div>
}


export const query = graphql`

query MyQuery {
      allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "blog-post"}}}) {
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
`