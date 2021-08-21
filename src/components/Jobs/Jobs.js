import React, { useState } from 'react';
import cx from 'classnames';
import { FaAngleDoubleRight } from 'react-icons/fa';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';
import { Title } from '../../components';
import * as styles from './Jobs.module.css';

export const Jobs = () => {
  const data = useStaticQuery(query);
  const jobs = data.jobs.edges.map((item) => item.node);
  const [value, setValue] = useState(0);
  const { company, position, location, date, desc } = jobs[value];
  const imageUrl = getSrc(data.file.edges[0].node);

  return (
    <section
      className={cx('section')}
      style={{
        background: `url(${imageUrl}) no-repeat center center/cover`,
        backgroundAttachment: `fixed`,
        width: '100%',
      }}>
      <Title title="experience" />
      <div className={styles.jobsCenter}>
        <div className={styles.btnContainer}>
          {jobs.map((item, index) => (
            <button
              key={item.strapiId}
              onClick={() => setValue(index)}
              className={cx(
                styles.jobBtn,
                `${index === value && styles.activeBtn}`
              )}>
              {item.company}
            </button>
          ))}
        </div>

        <article className={styles.jobInfo}>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <h6>{location}</h6>
          <p className={styles.jobDate}>{date}</p>
          {desc.map((item) => (
            <div key={item.id} className={styles.jobDesc}>
              <FaAngleDoubleRight
                className={styles.jobIcon}></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          ))}
        </article>
      </div>
      <Link to="/about" className={cx('btn', 'centerBtn')}>
        more info
      </Link>
    </section>
  );
};

export const query = graphql`
  {
    jobs: allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      edges {
        node {
          company
          date
          desc {
            id
            name
          }
          position
          strapiId
        }
      }
    }
    file: allFile(filter: { name: { eq: "jobs-img" } }) {
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
