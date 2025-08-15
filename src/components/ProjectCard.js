'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiGithub } from 'react-icons/fi';

const ProjectCard = ({ project, isReversed = false }) => {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-16">
      
      <div className={`md:col-span-7 rounded-lg overflow-hidden transition-all duration-300 ${isReversed ? 'md:order-last' : ''}`}>
        <Link href={project.link} target="_blank" rel="noopener noreferrer">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={450}
            style={{ objectFit: 'cover' }}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      </div>

      <div className={`md:col-span-5 ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
        <h3 className="text-2xl font-bold text-[--primary] mb-2">{project.title}</h3>
        <div className="bg-[--card-background] p-4 rounded-lg shadow-sm ">
          <p className="text-[--foreground] opacity-80 text-base text-left">{project.description}</p>
        </div>
        
        <div className={`flex flex-wrap gap-2 my-4 ${isReversed ? 'md:justify-end' : 'md:justify-start'}`}>
          {project.technologies?.map((tech, index) => (
            <span key={index} className="bg-[--primary] bg-opacity-10 text-[--primary] text-sm font-semibold px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className={`flex items-center gap-4 mt-4 ${isReversed ? 'md:justify-end' : 'md:justify-start'}`}>
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="text-[--foreground] hover:text-[--primary] transition-colors" title="Source Code">
            <FiGithub size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
