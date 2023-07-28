import * as React from "react";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout2";


const TagsPage = ({
  data: {
    allMarkdownRemark: { group },
    site: {
      siteMetadata: { title },
    },
  },
  usedTags = [
    "Programing", "Business", "Design", "Culture" , "Humor"
  ],
  tagColors = [
    "#BC0000", "#045B0D", "#051390", "#813C16", "#7D0590"
  ]
}) => (

  <Layout>
    <section className="section pad-top">
      <Helmet title={`Tags | ${title}`} />
      <div className="container content">
        <div className="columns">
          <div
            className="column is-10 is-offset-1"
            style={{ marginBottom: "6rem" }}
          >
            <h1 className="title is-size-2 is-bold-light">Tags</h1>
            <div>
              {group.map((tag) => (
              
                  <Link className="tag-box"  to={`/tags/${kebabCase(tag.fieldValue)}/`} style={{
                    backgroundColor: (() => {          
                      switch (tag.fieldValue) { 
                        case usedTags[0] :   return tagColors[0];
                        case usedTags[1] :   return tagColors[1];
                        case usedTags[2] :   return tagColors[2];
                        case usedTags[3] :   return tagColors[3];
                        case usedTags[4] :   return tagColors[4];             
                        default:      return "lightblue"
                      }
                    })()
                  }}>
                   {tag.fieldValue} ({tag.totalCount})
                  </Link>
              
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default TagsPage;

export const tagPageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 1000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;