
import { useStaticQuery, graphql } from "gatsby";

const PlantsData = ({ render }) => {
    const data = useStaticQuery(graphql`
    query PlantsQuery {
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
    `);

    // Pass the data to the render prop
    return render(data.allMarkdownRemark.edges);
};

export default PlantsData;
