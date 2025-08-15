import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import EducationSection from '../components/EducationSection';
import ProjectSection from '../components/ProjectSection';
import MailSection from '../components/MailSection';
import TechnologiesSection from '../components/TechnologiesSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection /> 
      <EducationSection />
      <ProjectSection /> 
      <TechnologiesSection />
      <MailSection />
    </Layout>
  );
}