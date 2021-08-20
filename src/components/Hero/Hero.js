import React from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { Socials, Particlesbg,Quotes } from '../../components';
import * as styles from './Hero.module.css';

export const query = graphql`
  {
    file:allFile(filter: { name: { eq: "hero-img" } }) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;

export const Hero = () => {
  const data = useStaticQuery(query);
  const imageUrl = getSrc(data.file.edges[0].node)

  return (
    <header
      className={styles.Hero}
      style={{
        background: `url(${imageUrl}) no-repeat center center/cover`,
        backgroundAttachment: `fixed`,
      }}>
      <div className={cx('sectionCenter', styles.HeroCenter)}>
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
