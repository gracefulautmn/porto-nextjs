'use client';

import Link from 'next/link';
import Image from 'next/image';

import profileData from '../data/profileData';
import { brutalBtnPrimary, brutalBtnGhost } from '../lib/brutalist';

const HeroSection = () => {
  return (
    <section id="hero" className="w-full pb-space-3xl pt-space-md">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-start">
        {/* Left column (7/12) */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h1 className="font-display-xl text-display-xl text-on-surface uppercase tracking-tight leading-none mb-space-md">
            NIZAR AFHAM
          </h1>
          <div className="w-full h-1 bg-on-surface mb-space-md" aria-hidden="true" />
          <p className="font-headline-sm text-headline-sm text-on-surface uppercase tracking-tight mb-space-md">
            {profileData.title}
          </p>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mb-space-xl">
            {profileData.bio}
          </p>
          <div className="flex flex-wrap items-center gap-space-md">
            <Link
              href="#projects"
              className={`${brutalBtnPrimary} font-headline-sm text-label-caps uppercase px-space-xl py-space-md font-bold`}
            >
              Lihat Project
            </Link>
            <Link
              href="#contact"
              className={`${brutalBtnGhost} font-headline-sm text-label-caps uppercase px-space-xl py-space-md font-bold`}
            >
              Hubungi
            </Link>
          </div>
        </div>

        {/* Right column (5/12) — framed portrait */}
        <div className="lg:col-span-5 w-full flex justify-start lg:justify-end">
          <div className="relative w-full max-w-md">
            <div
              className="absolute inset-0 bg-on-surface translate-x-3 translate-y-3"
              aria-hidden="true"
            />
            <div className="relative bg-surface-container-lowest border-[3px] border-on-surface p-space-xs">
              <div className="relative w-full aspect-[4/5] bg-surface-container-high border-2 border-on-surface overflow-hidden">
                <Image
                  src="/images/profile.jpg"
                  alt="Portrait of Nizar Afham"
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover "
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
