'use client';

import React from 'react';
import educationData from '../data/educationData';

const EducationSection = () => {
  return (
    <section id="education" className="mt-24">
      <h2 className="text-3xl text-left font-bold mb-12 text-[--foreground]">
        Education
      </h2>

      <div className="space-y-8 mt-8 border-l-2 border-[--subtle-border] pl-6">
        {educationData.map((education, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[30px] top-1.5 w-4 h-4 bg-[--primary] rounded-full"></div>
            <h3 className="text-xl font-semibold text-[--foreground]">
              {education.degree}
            </h3>
            <p className="text-md text-[--foreground] opacity-60">
              {education.period}
            </p>
            <p className="text-md text-[--foreground] opacity-80 mt-1">
              {education.institution}
            </p>
            <p className="mt-2 text-[--foreground] opacity-90">
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
