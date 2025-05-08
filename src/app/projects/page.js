'use client';
import React, { useState } from 'react';
import Layout from '../../components/Layout';
import ProjectCard from '../../components/ProjectCard';
import projectsData from '../../data/projectsData';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'web', 'mobile'];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  return (
    <Layout>
      <section className="section-container">
        <h1 className="section-heading">All Projects</h1>

        <div className="flex gap-4 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-black text-white'
                  : 'bg-gray-200 text-black'
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-6">
  {filteredProjects.map((project) => (
    <ProjectCard key={project.id} project={project} layout="horizontal" />
  ))}
</div>
      </section>
    </Layout>
  );
}
