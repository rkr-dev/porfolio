import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
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
          <p>{description.length > 100 ? `${description.substr(0, 100)} ...` : description}</p>
          <div className={styles.ProjectStack}>
            {stack.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
          <div className={styles.ProjectFooter}>
          <a href={github}>
            <FaGithubSquare className={styles.ProjectIcon}></FaGithubSquare>
          </a>
          <a href={url}>
            <FaShareSquare className={styles.ProjectIcon}></FaShareSquare>
          </a>
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
