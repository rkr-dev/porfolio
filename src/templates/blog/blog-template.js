import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import { Layout, SEO } from '../../components';
import * as styles from './blog-template.module.css';

const BlogTemplate = ({ data }) => {
  const { title, content, desc, image } = data.blog;
  return (
    <Layout>
      <SEO title={title} image={image.url} desc={desc} />
      <section className={styles.blogTemplate}>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className={styles.blogImage}
        />
        <div className={cx('sectionCenter')}>
          <article className={styles.blogContent}>
            <ReactMarkdown children={content} />
          </article>
          <Link to="/blog" className={cx(styles.blogContent, 'centerBtn')}>
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default BlogTemplate;

export const query = graphql`
  query getSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
      title
      desc
      image {
        url
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
