'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

const ProjectSection = () => {
  const featuredProjectTitles = ["Violie", "Olivia"];
  
  const displayProjects = featuredProjectTitles
    .map(title => projectsData.find(p => p.title === title))
    .filter(Boolean); 
  
  return (
    <section id="project" className="mt-24">
      <h2 className="text-3xl text-center font-bold mb-16">Project Experience</h2>
      
      <div className="space-y-16">
        {displayProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex ${index % 2 !== 0 ? 'md:justify-end' : 'md:justify-start'}`}
          >
            <div className="w-full md:w-10/12 lg:w-3/4">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link 
          href="/projects" 
          className="text-lg font-semibold text-[--primary] hover:underline"
        >
          See More Projects
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
