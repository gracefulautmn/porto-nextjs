'use client';

import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';
import { brutalBtn, focusRing } from '@/lib/brutalist';

const categories = ['all', 'web', 'mobile'];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProjects =
    selectedCategory === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <Layout>
      <section className="mt-space-3xl">
        <h1 className="font-headline-md text-headline-md uppercase text-on-surface border-t-2 border-on-surface pt-space-md mb-space-xs">
          All Projects
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant mb-space-xl">
          Here is a collection of projects I have worked on.
        </p>

        <div className="flex flex-wrap gap-space-md mb-space-2xl">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              aria-pressed={selectedCategory === category}
              className={`${brutalBtn} ${focusRing} font-label-mono text-label-mono uppercase px-space-md py-space-sm ${
                selectedCategory === category
                  ? 'bg-primary-container text-on-surface'
                  : 'bg-surface-container-lowest text-on-surface hover:bg-tertiary-fixed'
              }`}
            >
              [{category.toUpperCase()}]
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              accent={index % 2 === 0 ? '#26ccc2' : '#ffb86e'}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
