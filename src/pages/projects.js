import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO, Projects } from '../components';
import { getImage } from 'gatsby-plugin-image';

const ProjectsPage = ({ data }) => {
  let projects = data.projects.edges;
  return (
    <Layout>
      <SEO title="Projects" />
      <Projects projects={projects} title="all projects" />
    </Layout>
  );
};

export default ProjectsPage;

export const query = graphql`
  {
    projects: allStrapiProjects {
      edges {
        node {
          github
          featured
          description
          id
          title
          updatedAt
          url
          visible
          stack {
            id
            title
          }
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
