import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import { Title, Project } from '../../components';
import * as styles from './Projects.module.css';

export const Projects = ({ projects, title, showLink }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className={cx('sectionCenter', styles.ProjectsCenter)}>
        {projects.map(({ node }) => (
          <Project key={node.id} {...node} />
        ))}
      </div>
      {showLink && (
        <Link to="/projects" className={cx('btn', 'centerBtn')}>
          projects
        </Link>
      )}
    </section>
  );
};
