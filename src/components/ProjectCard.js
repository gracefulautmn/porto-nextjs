'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { monoChip, brutalBtn } from '@/lib/brutalist';

const ProjectCard = ({ project, accent = '#26ccc2' }) => {
  return (
    <div
      className="flex flex-col bg-surface-container-lowest border-[2.5px] border-on-surface p-space-md"
      style={{ boxShadow: `6px 6px 0px ${accent}` }}
    >
      <div className="border-2 border-on-surface overflow-hidden mb-space-md">
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={450}
          className="w-full h-48 object-cover"
        />
      </div>

      <h3 className="font-headline-sm text-headline-sm uppercase text-on-surface mb-space-xs">
        {project.title}
      </h3>

      <p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-space-xs mb-space-md">
        {project.technologies?.map((tech, index) => (
          <span key={index} className={monoChip}>
            {tech}
          </span>
        ))}
      </div>

      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${brutalBtn} w-full bg-surface-container-lowest text-on-surface font-label-mono text-label-mono uppercase px-space-md py-space-sm mt-auto`}
      >
        [GITHUB REPO]
      </Link>
    </div>
  );
};

export default ProjectCard;
