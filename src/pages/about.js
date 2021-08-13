import React from 'react';
import { graphql } from 'gatsby';
import { Layout, About, SEO } from '../components';

const AboutPage = ({
  data:{about:{nodes}}
}) => {
const { title, info, image, stack } = nodes[0];
image.src = image.url;
  return (
    <Layout>
       <SEO title="About" image={ image}/>
            <About title={title} info={info} stack={stack} image={ image}/> 
    </Layout>
  );
};

export default AboutPage;

export const query = graphql`
{
  about:allStrapiAbout {
    nodes {
      title
      info
      stack {
        id
        title
      }
      image{
        name
        url
      }
    }
  }
}
`;
