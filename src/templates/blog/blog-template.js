import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import { Layout, Seo } from '../../components';
import * as styles from './blog-template.module.css';

const BlogTemplate = ({ data }) => {
  const { title, content, desc, image } = data.blog;
  return (
    <Layout>
      <Seo title={title} image={image.url} desc={desc} />
      <section className={styles.BlogTemplate}>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className={styles.BlogImg}
        />
        <div className={cx('sectionCenter')}>
          <article className={styles.BlogContent}>
            <ReactMarkdown children={content} />
          </article>
          <Link to="/blog" className={cx('btn', 'centerBtn')}>
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
