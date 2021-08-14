import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage,getImage } from 'gatsby-plugin-image';
import * as styles from './Project.module.css';

export const Project = ({
  id,
  description,
  title,
  github,
  stack,
  url,
  image
}) => {

  return (
    <Link to={`/projects/${id}`} key={id}>
     {console.log('imageData: ', image)}
      <article className={styles.Project}>
        {image && (
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            className={styles.ProjectImg}
            alt="test"
          />
        )}
        <div className={styles.ProjectCard}>
          <h4>{title}</h4>
          <p>{description}</p>
          <div className={styles.ProjectFooter}>
            <p>{github}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};
