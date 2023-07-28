const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images-v2');
const _ = require('lodash')


exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node);
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter{
              templateKey
              tags
            }
          }
        }
      }
    }
  `)

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/${node.frontmatter.templateKey}.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.fields.slug,
      },
    })
  })

   // Tag pages:
   let tags = []
   // Iterate through each post, putting all found tags into `tags`
   result.data.allMarkdownRemark.edges.forEach((edge) => {
     if (_.get(edge, `node.frontmatter.tags`)) {
       tags = tags.concat(edge.node.frontmatter.tags)
     }
   })
   // Eliminate duplicate tags
   tags = _.uniq(tags)

   // Make tag pages
   tags.forEach((tag) => {
     const tagPath = `/tags/${_.kebabCase(tag)}/`

     createPage({
       path: tagPath,
       component: path.resolve(`src/templates/tags.js`),
       context: {
         tag,
       },
     })
   })
 

  
}