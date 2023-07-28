import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";
import { graphql} from "gatsby";
import Layout from "../components/layout2";
import Content, { HTMLContent } from "../components/Content";
import ArthorBar from '../components/author-bar'
import TagBar from '../components/tagBar'


import ad from '../images/ad.png'
import adtwo from '../images/ad-two.png'

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  color1,
  author, 
  authorImage,
  date,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content;

  return (
    <div  style={{background: "#202124"}}>
      <Layout>
      {helmet || ""}
     
      
            <div className="h-pad flex gap-2 pad-top b-pad">
                <div className="col-8 ">
        <p>{tags[0]}</p>
                <h1 >
              {title}
            </h1>     
<ArthorBar author={author} date={date} authorImage={authorImage} />
         <div className="blog-content">
         <PostContent content={content} />
         </div>
       
           <div style={{ marginTop: `4rem` }}>
             <h4>Tags</h4>
           
                 
             <TagBar/>
            
           </div>
      
     
                </div>

                <div className="col-4 " style={{padding: "0 4rem"}}>
                <img className="v-pad-10" width="100%" src= {ad} alt="Sauronana is a rotten banana cursed by a dark lord." />
                <img className="v-pad-10" width="100%" src= {adtwo} alt="Jason weather is the worlds most point less app. " />
                </div>
            </div>
        
            </Layout>
      
    </div>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  color1: PropTypes.string,
  author: PropTypes.string,
  helmet: PropTypes.object,
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
<div >
    
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        color1={post.frontmatter.color1}
        date={post.frontmatter.date}
        author={post.frontmatter.author}
        authorImage={post.frontmatter.authorImage.publicURL}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        color1
        description
        tags
        authorImage {
          publicURL
        }
        author
      }
    }
  }
`;