'use client';

import React from 'react';
import Link from 'next/link';
import { brutalBtn, focusRing } from '../lib/brutalist';
import profileData from '../data/profileData';
import Image from 'next/image';

const socialLinks = [
  { label: '[GITHUB]', href: profileData.social.github },
  { label: '[LINKEDIN]', href: profileData.social.linkedin },
  { label: '[INSTAGRAM]', href: profileData.social.instagram },
  // { label: '[WHATSAPP]', href: profileData.social.whatsapp },
];

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-on-surface bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-space-md lg:px-space-xl py-space-2xl">
        <div className="flex flex-col gap-space-xl md:flex-row md:items-start md:justify-between">

          <div>
            <Link
              href="/"
              className="flex items-center gap-space-sm font-display-xl text-headline-sm uppercase text-on-surface"
            >
              <Image
                src="/logo-nd.png"
                alt="nizar.dev logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
              nizar.dev
            </Link>
            <p className="mt-space-2xs font-label-mono text-label-mono uppercase text-on-surface-variant">
              {profileData.title}
            </p>
          </div>

          <nav className="flex flex-wrap gap-space-sm">
            {socialLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${brutalBtn} ${focusRing} font-label-mono text-label-mono uppercase px-space-md py-space-xs bg-surface-container-lowest text-on-surface`}
              >
                {label}
              </Link>
            ))}
          </nav>

        </div>

        <p className="mt-space-2xl font-label-mono text-label-mono uppercase text-on-surface-variant">
          © {new Date().getFullYear()} NIZAR AFHAM AFLAHA. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
