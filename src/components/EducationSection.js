'use client';

import React from 'react';
import educationData from '../data/educationData';

const EducationSection = () => {
  return (
    <section id="education" className="mt-space-4xl border-t-2 border-on-surface pt-space-xl">
      <h2 className="font-headline-md text-headline-md uppercase text-on-surface mb-space-xl">
        Education
      </h2>

      <div>
        {educationData.map((education, index) => (
          <div
            key={index}
            className="grid md:grid-cols-12 gap-space-md border-b-2 border-on-surface py-space-lg hover:bg-surface-container-low transition-colors"
          >
            <p className="md:col-span-3 font-label-mono text-label-mono font-bold uppercase text-on-surface">
              {education.period}
            </p>
            <h3 className="md:col-span-5 font-headline-sm text-headline-sm text-on-surface">
              {education.institution || education.degree}
            </h3>
            <p className="md:col-span-4 font-label-mono text-label-mono text-on-surface-variant">
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
