
import { useStaticQuery, graphql } from "gatsby";

const ButterfliesData = ({ render }) => {
    const data = useStaticQuery(graphql`
    query ButterfliesQuery {
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
    `);

    const sortedItems = [...data.allMarkdownRemark.edges].sort((a, b) =>
    a.node.frontmatter.commonName.localeCompare(b.node.frontmatter.commonName)
    );

    // Use a render prop to pass the data
    return render(sortedItems);
};

export default ButterfliesData;
