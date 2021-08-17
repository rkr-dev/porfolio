const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const result = await graphql(`
    {
        blogs:allStrapiBlogs {
            edges {
              node {
                slug
              }
            }
          }
        projects:allStrapiProjects {
            edges {
              node {
                id
              }
            }
          }
    }
    `)

  result.data.blogs.edges.forEach(({ node }) => {
        createPage({
            path: `/blogs/${node.slug}`,
            component:path.resolve("src/templates/blog/blog-template.js"),
            context: {
                slug:node.slug
            }
        })
    })
    result.data.projects.edges.forEach(({ node }) => {
        createPage({
            path: `/projects/${node.id}`,
            component:path.resolve("src/templates/project/project-template.js"),
            context: {
                id:node.id
            }
        })
    })


}