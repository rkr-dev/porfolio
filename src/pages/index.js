import React from 'react';
import { graphql } from 'gatsby';
import { Layout, SEO, Hero, Projects, Jobs, Blogs } from '../components';

const IndexPage = () => {
  let blogs = [];
  let projects = [];
  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Projects projects={projects} title="featured projects" showLink />
      <Jobs />
      <Blogs blogs={blogs} title="latest Articles" showLink />
    </Layout>
  );
};

export default IndexPage;
