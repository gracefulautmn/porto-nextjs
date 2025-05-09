'use client';

import React from 'react';
import educationData from '../data/educationData';

const EducationSection = () => {
  return (
    <section id="education" className="section-container mt-16">
      <h2 className="text-xl section-heading font-bold">EDUCATION</h2> {/* Ukuran heading 2xl, sebelumnya xl */}

      <div className="space-y-8 mt-8">
        {educationData.map((education, index) => (
          <div key={index} className="grid grid-cols-3 gap-6">
            <div className="col-span-1">
              <h3 className="text-lg font-medium">{education.degree}</h3> {/* Diubah dari text-sm ke text-base */}
              <p className="text-lg text-gray-500">{education.period}</p> {/* Diubah dari text-xs ke text-sm */}
              <p className="text-lg mt-1">{education.institution}</p> {/* Diubah dari text-xs ke text-sm */}
            </div>

            <div className="col-span-2">
              <p className="text-lg text-gray-700">{education.description}</p> {/* Diubah dari text-sm ke text-base */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;