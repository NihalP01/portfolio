import React from 'react';
import { Sections } from '../components/sections';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Sections.HeroSection />
      <Sections.ProjectSection />
      <Sections.FreelancingSection />
    </Layout>
  );
};

export default Home;
