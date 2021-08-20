import React from 'react';
import { graphql } from 'gatsby';
import { getSrc, getImage } from 'gatsby-plugin-image';
import { Layout, About, Seo } from '../components';

const AboutPage = ({ data: { about } }) => {
  const { title, info, image, stack } = about.edges[0].node;
  const imagePath = getSrc(image.localFile);
  const imageData = getImage(image.localFile);
  return (
    <Layout>
      <Seo title="About" image={imagePath} />
      <About title={title} info={info} stack={stack} image={imageData} />
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
  {
    about: allStrapiAbout {
      edges {
        node {
          stack {
            title
            id
          }
          id
          title
          info
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
    }
  }
`;
