import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'
import * as styles from './Project.module.css'

export const Project = ({
  id,
  description,
  title,
  github,
  stack,
  url,
  image,
}) => {
  return (
    <Link to={`/projects/${id}`} key={id}>
      <article className={styles.Project}>
        {image && (
          <GatsbyImage
            image={image.localFile.childImageSharp.gatsbyImageData}
            className={styles.ProjectImg}
            alt={title}
          />
        )}

        <div className={styles.ProjectCard}>
          <h4>{title}</h4>
          <p>
            {description.length > 100
              ? `${description.substr(0, 100)} ...`
              : description}
          </p>
          <div className={styles.ProjectStack}>
            <div className={styles.ProjectStackItems}>
              {stack.map((item) => (
                <span key={item.id}>{item.title}</span>
              ))}
            </div>
            <div className={styles.ProjectFooter}>
              <FaGithubSquare
                onClick={(e) => {
                  e.preventDefault()
                  window.open(github, `_blank`)
                }}
                style={{
                  height: '1.7rem',
                  width: '1.7rem',
                  backgroundColor: '#333',
                  cursor: 'pointer',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  marginLeft: '2px',
                }}
              ></FaGithubSquare>
              <FaShareSquare
                onClick={(e) => {
                  e.preventDefault()
                  window.open(url, `_blank`)
                }}
                style={{
                  height: '1.7rem',
                  width: '1.7rem',
                  backgroundColor: '#000',
                  cursor: 'pointer',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  marginRight: '2px',
                }}
              ></FaShareSquare>
            </div>
          </div>
        </div>
      </article>
    </Link>
  )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.arrayOf(PropTypes.object).isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
}
