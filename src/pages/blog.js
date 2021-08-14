import React from 'react';
import { graphql } from 'gatsby';
import { Blogs, Layout, SEO } from '../components';

const BlogPage = ({ data }) => {
  const blogs = data.blogs.edges;

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="blogPage">
        <Blogs blogs={blogs} title="Blog" />
      </section>
    </Layout>
  );
};

export default BlogPage;

export const query = graphql`
  {
    blogs: allStrapiBlogs {
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
  }
`;
