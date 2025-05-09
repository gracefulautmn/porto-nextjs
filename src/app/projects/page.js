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

        {/* Container untuk tombol kategori, flex dengan gap */}
        <div className="flex gap-4 mt-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              // Mengubah kelas untuk styling text-only dengan underline
              className={`text-black hover:underline ${ // teks hitam, hover underline
                selectedCategory === category
                  ? 'underline font-semibold' // underline & lebih tebal jika terpilih
                  : ''
              }`}
            >
              {/* Menggunakan capitalize untuk tampilan lebih baik, bisa juga toUpperCase() */}
              {category.charAt(0).toUpperCase() + category.slice(1)}
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