// components/TechnologiesSection.js

import React from 'react';
import {
  SiHtml5, SiCss3, SiJavascript, SiPhp, SiPython, SiJava, SiDart,
  SiTailwindcss, SiLaravel, SiFlutter, SiVuedotjs, SiSupabase, SiDjango, SiNextdotjs,
  SiMysql, SiPostgresql, SiPostman, SiGithub
} from 'react-icons/si';

const TechnologiesSection = () => {
  const technologies = {
    'Programming Languages': [
      { name: 'HTML5', icon: <SiHtml5 /> },
      { name: 'CSS3', icon: <SiCss3 /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'PHP', icon: <SiPhp /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'Dart', icon: <SiDart /> },
    ],
    'Frameworks': [
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Laravel', icon: <SiLaravel /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'Vue.js', icon: <SiVuedotjs /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'Django', icon: <SiDjango /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
    ],
    'Tools': [
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'PostgreSQL', icon: <SiPostgresql /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'GitHub', icon: <SiGithub /> },
    ]
  };

  const getHoverColorClass = (name) => {
    switch (name.toLowerCase()) {
      case 'html5': return 'group-hover:text-orange-600';
      case 'css3': return 'group-hover:text-blue-600';
      case 'javascript': return 'group-hover:text-yellow-400';
      case 'php': return 'group-hover:text-indigo-600';
      case 'python': return 'group-hover:text-blue-400';
      case 'java': return 'group-hover:text-red-700';
      case 'dart': return 'group-hover:text-sky-600';
      case 'tailwind css': return 'group-hover:text-teal-400';
      case 'laravel': return 'group-hover:text-red-600';
      case 'flutter': return 'group-hover:text-sky-400';
      case 'vue.js': return 'group-hover:text-green-500';
      case 'supabase': return 'group-hover:text-green-600';
      case 'django': return 'group-hover:text-green-700';
      case 'next.js': return 'group-hover:text-black';
      case 'mysql': return 'group-hover:text-blue-700';
      case 'postgresql': return 'group-hover:text-indigo-700';
      case 'postman': return 'group-hover:text-orange-500';
      case 'github': return 'group-hover:text-black';
      default: return '';
    }
  };

  return (
    <section className="section-container py-16">
      <h2 className="font-bold text-xl opacity-100 text-black text-opacity-100 section-heading">TECHNOLOGIES</h2>

      <div className="mt-8 space-y-8">
        {Object.keys(technologies).map((category) => (
          <div key={category}>
            <h3 className="text-lg text-black opacity-100 text-opacity-100 mb-4 border-b border-gray-300 pb-2">
              {category}
            </h3>

            <div className="flex flex-wrap gap-6">
              {technologies[category].map((tech, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center justify-center w-20 h-20 bg-gray-100 text-gray-400 rounded-xl shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                  title={tech.name}
                >
                  <div className={`text-3xl transition-colors duration-300 ${getHoverColorClass(tech.name)}`}>
                    {tech.icon}
                  </div>
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
