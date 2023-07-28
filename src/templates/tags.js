import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout2";
import TagBar from '../components/tagBar'

import BlogArticle from '../components/blogArticleOne';

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges;
    const postLinks = posts.map((post) => (
  <div className="col-4-gap">
<BlogArticle
     width = "nnn"
      type = "normal"
      slug = {post.node.fields.slug}
      tag = {post.node.frontmatter.tags[0]}
      title = {post.node.frontmatter.title}
      description = {post.node.frontmatter.description}
      featuredImage = {post.node.frontmatter.featuredImage.publicURL}
      />
  </div> 
    ));
    
    const tag = this.props.pageContext.tag;
    const title = this.props.data.site.siteMetadata.title;
    const totalCount = this.props.data.allMarkdownRemark.totalCount;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section style={{background:"#202124"}}>
          <Helmet title={`${tag} | ${title}`} />
          
          
              <div className="pad-top h-pad" >
              <TagBar/>
                <h3 >{tagHeader}</h3>
             
                <div className="flex wrap gap-3">
                {postLinks}
                  
                  </div>
               
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
          
          
        </section>
      </Layout>
    );
  }
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            description
            featuredImage{
              publicURL
            }
          }
        }
      }
    }
  }
`;