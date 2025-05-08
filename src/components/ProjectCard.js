'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project, layout = 'vertical', isPlaceholder = false }) => {
  if (isPlaceholder) {
    return (
      <div className="bg-light-gray p-2 w-full">
        <div className="relative w-full aspect-video bg-gray-200 flex items-center justify-center">
          <div className="w-full h-0.5 bg-gray-300 rotate-45 absolute"></div>
          <div className="w-full h-0.5 bg-gray-300 -rotate-45 absolute"></div>
        </div>
      </div>
    );
  }

  // Default vertical layout
return (
  <div className="bg-light-gray p-2 w-full">
    <div className={`relative w-full aspect-video ${project.color}`}> {/* Hapus overflow-hidden */}
      <Image
        src={project.image}
        alt={project.title}
        fill
        style={{ objectFit: 'cover' }}
        className="rounded-lg"
      />
    </div>
    <div className="mt-2">
      <Link href={project.link} target="_blank" className="text-xl font-semibold hover:underline">
        {project.title}
      </Link>
      <p className="text-lg text-gray-500">{project.description}</p>
    </div>
  </div>
);

// Horizontal layout
if (layout === 'horizontal') {
  return (
    <div className="flex bg-light-gray overflow-hidden rounded-lg shadow-md">
      <div className={`relative w-[40%] h-48 ${project.color}`}> {/* Hapus overflow-hidden */}
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-lg"
        />
      </div>
      <div className="p-4 w-[60%] flex flex-col justify-center">
        <Link href={project.link} target="_blank" className="text-lg font-semibold hover:underline">
          {project.title}
        </Link>
        <p className="text-sm text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}
  
};

export default ProjectCard;
