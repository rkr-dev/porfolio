import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import cx from 'classnames';
import { Title } from '../../components';
import * as styles from './About.module.css';

export const About = ({ title, info, stack, image }) => {
  return (
    <section className={styles.AboutPage}>
      <div className={cx('SectionCenter', styles.AboutCenter)}>
        <div className={styles.AboutImgContainer}>
        <GatsbyImage image={image} alt="{image.name}" className={styles.AboutImg} imgClassName={ styles.ImgClass}/>
        </div>
        <article className={styles.AboutText}>
          <Title title={title} styleClass="about" />
          <p>{info}</p>
          <div className={styles.AboutStack}>
            {stack.map((item) => (
              <span key={item.id}>{item.title}</span>
            ))}
          </div>
        </article>
      </div>
      <Link to="/projects" className={cx('btn', 'centerBtn')}>
        Projects
      </Link>
    </section>
  );
};
