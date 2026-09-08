'use client';

import React from 'react';

import profileData from '../data/profileData';

const { coreStack, familiarSupporting } = profileData.techGroups;

// Bracketed uppercase mono chip label, e.g. [React]. (R8.4.)
const chipBase =
  'font-label-mono text-label-mono uppercase px-space-md py-space-xs ' +
  'border-2 border-on-surface text-on-surface';

const coreChip = `${chipBase} bg-primary-container`;
const supportingChip = `${chipBase} bg-surface-container-lowest hover:bg-tertiary-fixed transition-colors`;

const TechGroup = ({ title, items, chipClassName }) => (
  <div className="bg-surface-container-lowest border-2 border-on-surface shadow-[6px_6px_0px_#1b1b1b] p-space-lg">
    <h3 className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight mb-space-md">
      {title}
    </h3>
    <div className="flex flex-wrap gap-space-sm">
      {items.map((tech) => (
        <span key={tech} className={chipClassName}>
          [{tech}]
        </span>
      ))}
    </div>
  </div>
);

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="w-full pt-space-2xl">
      <h2 className="font-headline-md text-headline-md text-on-surface uppercase tracking-tight border-t-2 border-on-surface pt-space-md mb-space-xl">
        Technologies
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl">
        <TechGroup title="Core Stack" items={coreStack} chipClassName={coreChip} />
        <TechGroup
          title="Familiar & Supporting"
          items={familiarSupporting}
          chipClassName={supportingChip}
        />
      </div>
    </section>
  );
};

export default TechnologiesSection;
