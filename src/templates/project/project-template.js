import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import cx from 'classnames';
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa';
import { Layout, Seo } from '../../components';
import * as styles from './project-template.module.css';

const ProjectTemplate = ({ data }) => {
  const { github, description, title, url, stack, image } = data.project;

  return (
    <Layout>
      <Seo title={title} image={image.url} />
      <section className={styles.ProjectTemplate}>
        <div className={cx('sectionCenter')}>
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            imgClassName={styles.ProjectImg}
            alt={title}
          />
          <div className={styles.ProjectDetails}>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.ProjectStack}>
              {stack.map((item) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
            <div className={styles.ProjectLinks}>
              <a href={github} rel="noopener noreferrer" target="_blank">
                <FaGithubSquare className={styles.ProjectIcon}></FaGithubSquare>
              </a>
              <a href={url} rel="noopener noreferrer" target="_blank">
                <FaShareSquare className={styles.ProjectIcon}></FaShareSquare>
              </a>
            </div>
          </div>
          <Link to="/projects" className={cx('btn', 'centerBtn')}>
            projects
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
