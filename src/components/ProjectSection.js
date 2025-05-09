'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';

const ProjectSection = ({ limit = 3  }) => {
  // Get a limited number of projects for the homepage
  const displayProjects = projectsData.slice(0, limit);
  
  return (
    <section id="project" className="mt-16 section-container">
      <h2 className=" text-xl text-black opacity-100 text-opacity-100 font-bold section-heading">PROJECT</h2>
      
      {/* Zigzag layout for projects */}
      <div className="mt-8 space-y-6">
        {/* First row - left */}
        <div className="flex rounded-lg justify-start">
          <div className="w-3/4">
            {displayProjects[0] && <ProjectCard project={displayProjects[0]} layout="vertical"/>}
          </div>
        </div>
        
        {/* Second row - right (if there's a second project) */}
        {displayProjects.length > 1 && (
          <div className="flex justify-end">
            <div className="w-3/4">
                <ProjectCard project={displayProjects[1]} layout="vertical" />
            </div>
          </div>
        )}
        
      </div>
      
      <div className="mt-6 text-center">
        <Link 
          href="/projects" 
          className="text-lg inline-block hover:underline"
        >
          see more project
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;