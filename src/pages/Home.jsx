import React from 'react';
import { Sections } from '../components/sections';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Sections.HeroSection />
      <Sections.ProjectSection />
      <Sections.FreelancingSection />
      <Sections.Skills />
      <Sections.AboutMe />
    </Layout>
  );
};

export default Home;
