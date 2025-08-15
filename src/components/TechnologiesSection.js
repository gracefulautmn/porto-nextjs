'use client';

import React from 'react';
import {
  SiJavascript, SiPhp, SiPython, SiDart, SiCplusplus,
  SiTailwindcss, SiLaravel, SiFlutter, SiVuedotjs, SiSupabase, SiDjango, SiNextdotjs,
  SiMysql, SiPostgresql, SiPostman, SiGithub
} from 'react-icons/si';

const TechnologiesSection = () => {
  const technologies = {
    'Programming Languages': [
      { name: 'JavaScript', icon: <SiJavascript />, hoverClass: 'group-hover:text-yellow-400' },
      { name: 'PHP', icon: <SiPhp />, hoverClass: 'group-hover:text-indigo-600' },
      { name: 'Python', icon: <SiPython />, hoverClass: 'group-hover:text-blue-400' },
      { name: 'Dart', icon: <SiDart />, hoverClass: 'group-hover:text-sky-600' },
      { name: 'C++', icon: <SiCplusplus />, hoverClass: 'group-hover:text-purple-600' },
    ],
    'Frameworks': [
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, hoverClass: 'group-hover:text-teal-400' },
      { name: 'Laravel', icon: <SiLaravel />, hoverClass: 'group-hover:text-red-600' },
      { name: 'Flutter', icon: <SiFlutter />, hoverClass: 'group-hover:text-sky-400' },
      { name: 'Vue.js', icon: <SiVuedotjs />, hoverClass: 'group-hover:text-green-500' },
      { name: 'Django', icon: <SiDjango />, hoverClass: 'group-hover:text-green-700' },
      { name: 'Next.js', icon: <SiNextdotjs />, hoverClass: 'group-hover:text-[--primary]' }, // Fixed
    ],
    'Tools': [
      { name: 'MySQL', icon: <SiMysql />, hoverClass: 'group-hover:text-blue-700' },
      { name: 'PostgreSQL', icon: <SiPostgresql />, hoverClass: 'group-hover:text-indigo-700' },
      { name: 'Postman', icon: <SiPostman />, hoverClass: 'group-hover:text-orange-500' },
      { name: 'GitHub', icon: <SiGithub />, hoverClass: 'group-hover:text-[--primary]' }, // Fixed
      { name: 'Supabase', icon: <SiSupabase />, hoverClass: 'group-hover:text-green-600' },
    ]
  };

  return (
    <section id="technologies" className="mt-24">
      <h2 className="text-3xl text-center font-bold mb-12 text-[--foreground]">TECHNOLOGIES</h2>

      <div className="mt-8 space-y-12">
        {Object.keys(technologies).map((category) => (
          <div key={category}>
            <h3 className="text-xl font-semibold text-[--foreground] opacity-90 mb-4 border-b border-[--subtle-border] pb-2">
              {category}
            </h3>

            <div className="flex flex-wrap gap-4">
              {technologies[category].map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center w-24 h-24 bg-[--card-background] text-[--foreground] opacity-70 rounded-xl border border-[--subtle-border] shadow-sm hover:shadow-md hover:opacity-100 transition-all duration-300 ease-in-out"
                  title={tech.name}
                >
                  <div className={`text-4xl transition-colors duration-300 ${tech.hoverClass}`}>
                    {tech.icon}
                  </div>
                  <p className="text-sm mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
