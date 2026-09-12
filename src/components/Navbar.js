'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { monoChip, focusRing } from '../lib/brutalist';

const NAV_ITEMS = [
  { label: '[CV]', href: '/CV - NIZAR AFHAM.pdf', external: true },
  { label: '[Contact]', href: '/#contact' },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((open) => !open);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const isActive = (href) => {
    const path = href.split('#')[0] || '/';
    return pathname === path;
  };

  const renderNavLink = (item, extraClasses = '') => {
    const active = !item.external && isActive(item.href);
    const externalProps = item.external
      ? { target: '_blank', rel: 'noopener noreferrer' }
      : {};
    return (
      <Link
        key={item.href}
        href={item.href}
        onClick={closeMobileMenu}
        aria-current={active ? 'page' : undefined}
        {...externalProps}
        className={`${monoChip} ${focusRing} ${active ? 'bg-primary-container' : ''} ${extraClasses}`}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-container-lowest border-b-2 border-on-surface">
      <div className="h-20 max-w-[1280px] mx-auto px-space-md lg:px-space-xl flex items-center justify-between">
        <Link
          href="/"
          onClick={closeMobileMenu}
          className={`flex items-center gap-space-sm font-display-xl text-2xl uppercase text-on-surface ${focusRing}`}
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

        <nav className="hidden md:flex items-center gap-space-md">
          {NAV_ITEMS.map((item) => renderNavLink(item))}
        </nav>

        <div className="md:hidden">
          <button
            type="button"
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            className={`border-2 border-on-surface bg-surface-container-lowest text-on-surface p-2 ${focusRing}`}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t-2 border-on-surface bg-surface-container-lowest">
          <nav className="max-w-[1280px] mx-auto px-space-md py-space-md flex flex-col gap-space-sm">
            {NAV_ITEMS.map((item) => renderNavLink(item, 'w-full text-center'))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
