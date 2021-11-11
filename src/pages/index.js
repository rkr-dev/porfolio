import React from 'react'
import { graphql } from 'gatsby'
import { Layout, Seo, Hero, Projects, Jobs, Blogs } from '../components'

const IndexPage = ({ data }) => {
  let blogs = data.blogs.edges
  let projects = data.projects.edges
  return (
    <Layout>
      <Seo title='Home' />
      <Hero />
      <Projects projects={projects} title='featured projects' showLink />
      <Jobs />
      <Blogs blogs={blogs} title='latest Articles' showLink />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    blogs: allStrapiBlogs(limit: 3, sort: { fields: date, order: DESC }) {
      edges {
        node {
          category
          id
          desc
          slug
          title
          date(formatString: "MMM Do YYYY")
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
    projects: allStrapiProjects(
      limit: 3
      filter: { featured: { eq: true } }
      sort: { fields: updatedAt, order: DESC }
    ) {
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
