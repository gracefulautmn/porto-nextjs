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
      <section className="py-16">
        <h1 className="text-4xl font-bold text-center mb-4 text-[--foreground]">
          All Projects
        </h1>
        <p className="text-center text-[--foreground] opacity-70 mb-12">
          Here is a collection of projects I have worked on.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-lg font-medium transition-colors duration-300 ${
                selectedCategory === category
                  ? 'text-[--primary] underline underline-offset-4' 
                  : 'text-[--foreground] opacity-60 hover:opacity-100 hover:text-[--primary]' 
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
