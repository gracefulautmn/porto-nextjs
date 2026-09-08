'use client';

import React from 'react';
import Link from 'next/link';
import ProjectCard from './ProjectCard';
import projectsData from '../data/projectsData';
import { brutalBtn } from '@/lib/brutalist';

const ProjectSection = () => {
  const featuredProjectTitles = ["Violie", "Olivia"];

  const displayProjects = featuredProjectTitles
    .map(title => projectsData.find(p => p.title === title))
    .filter(Boolean);

  return (
    <section id="projects" className="mt-space-4xl">
      <h2 className="font-headline-md text-headline-md uppercase text-on-surface border-t-2 border-on-surface pt-space-md mb-space-xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        {displayProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            accent={index % 2 === 0 ? '#26ccc2' : '#ffb86e'}
          />
        ))}
      </div>

      <div className="mt-space-xl">
        <Link
          href="/projects"
          className={`${brutalBtn} inline-block bg-surface-container-lowest text-on-surface font-label-mono text-label-mono uppercase px-space-md py-space-sm`}
        >
          [SEE MORE PROJECTS]
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
