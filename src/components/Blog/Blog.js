import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as styles from './Blog.module.css';

export const Blog = ({ id, title, image, date, category, slug, desc }) => {
  return (
    <Link to={`/blogs/${slug}`} key={id}>
      <article className={styles.blog}>
        {image && (
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            className={styles.blogImg}
          />
        )}
        <div className={styles.blogCard}>
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className={styles.blogFooter}>
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};
