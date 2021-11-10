import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo, Projects } from '../components'

const ProjectsPage = ({ data }) => {
  let projects = data.projects.edges
  return (
    <Layout>
      <Seo title='Projects' />
      <Projects projects={projects} title='all projects' />
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
  {
    projects: allStrapiProjects(sort: { fields: updatedAt, order: DESC }) {
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
`
