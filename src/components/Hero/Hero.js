import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import { Socials, Particlesbg,Quotes } from '../../components';
import * as styles from './Hero.module.css';

export const Hero = () => {
  return (
    <header
      className={styles.Hero}
      style={{
        background: `url('./assets/hero-img.png') no-repeat center center/cover`,
        backgroundAttachment: `fixed`,
      }}>
      <div className={cx(styles.SectionCenter, styles.HeroCenter)}>
        <article className={styles.HeroInfo}>
          <div>
            <div className="underline"></div>
            <h1>
              I'm Rinil <span>Kunhiraman</span>
            </h1>
            <h4>Web Developer</h4>
            <Link to="/about" className="btn">
              Learn More
            </Link>
          </div>
          <Socials />
          <Quotes />
         </article>
      </div>
      <Particlesbg />
    </header>
  );
};
