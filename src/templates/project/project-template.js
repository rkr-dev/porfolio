import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';
import { Layout, SEO } from '../../components';
import * as styles from './project-template.module.css';

const ProjectTemplate = ({ data }) => {
  const {
    github,
    featured,
    description,
    id,
    title,
    updatedAt,
    url,
    visible,
    stack,
    image,
  } = data.project;
 
  return (
    <Layout>
      <SEO title={title} image={image.url} />
      <section className={styles.blogTemplate}>
        <GatsbyImage
          image={image.localFile.childImageSharp.gatsbyImageData}
          className={styles.blogImage}
        />
        <div className={cx('sectionCenter')}>
          <article className={styles.blogContent}>
            <ReactMarkdown children={description} />
          </article>
          <Link to="/projects" className={cx('btn', 'centerBtn')}>
            blog
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectTemplate;

export const query = graphql`
  query GetSingleProject($id: String) {
    project: strapiProjects(id: { eq: $id }) {
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
        url
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
`;
