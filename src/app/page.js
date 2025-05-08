import React from 'react';
import Layout from '../components/Layout';
import ProfileSection from '../components/ProfileSection';
import EducationSection from '../components/EducationSection';
import ProjectSection from '../components/ProjectSection';
import MailSection from '../components/MailSection'; 

export default function Home() {
  return (
    <Layout>
      <ProfileSection />
      <EducationSection />
      <ProjectSection limit={3} />
      <MailSection />
    </Layout>
  );
}