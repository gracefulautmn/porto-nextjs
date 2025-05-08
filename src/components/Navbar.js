'use client';

import React, { useState } from 'react';
import Image from 'next/image'; // Still unused, can be removed if not needed.
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText, Menu, X } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    const pathPart = href.split('#')[0] || '/';
    return pathname === pathPart;
  };

  return (
    <header className="py-6 relative z-50">
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className={`font-bold text-3xl transition-all text-opacity-100 opacity-100 duration-300 hover:underline-offset-4 hover:underline text-black decoration-2 decoration-black-200 ${
            pathname === '/' ? 'font-medium' : ''
          }`}
        >
          code with nizar
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          {!isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black-500"
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav
          className={`transition-all duration-300 ease-in-out md:flex md:items-center text-black md:space-x-6 ${
            isMobileMenuOpen
              ? 'fixed top-0 right-0 w-1/2 h-screen bg-white shadow-md py-10 px-6 z-50 flex flex-col space-y-6'
              : 'hidden'
          }`}
        >
          {/* Close Button */}
          {isMobileMenuOpen && (
            <button
              onClick={toggleMobileMenu}
              className="self-end text-gray-700 mb-6"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          )}

          <Link
            href="/"
            onClick={closeMobileMenu}
            className={`text-lg transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200 ${
              isActive('/') ? 'font-medium' : ''
            }`}
          >
            Profile
          </Link>

          <Link
            href="/#education"
            onClick={closeMobileMenu}
            className={`text-lg transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200 ${
              isActive('/#education') ? 'font-medium' : ''
            }`}
          >
            Education
          </Link>

          <Link
            href="/#project"
            onClick={closeMobileMenu}
            className={`text-lg transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200 ${
              isActive('/#project') ? 'font-medium' : ''
            }`}
          >
            Projects
          </Link>

          <a
            href="/resume-eng.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="text-lg flex items-center transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200"
          >
            <FileText size={16} className="mr-1" />
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
