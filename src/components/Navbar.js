'use client';

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = (
    <>
      <Link href="/" onClick={closeMobileMenu} className={`text-lg hover:text-[--primary] transition-colors ${pathname === '/' ? 'text-[--primary] font-semibold' : ''}`}>
        Profile
      </Link>
      <Link href="/#education" onClick={closeMobileMenu} className="text-lg hover:text-[--primary] transition-colors">
        Education
      </Link>
      <Link href="/#project" onClick={closeMobileMenu} className="text-lg hover:text-[--primary] transition-colors">
        Projects
      </Link>
    </>
  );

  return (
    <header className="py-6 relative z-50">
      <div className="flex items-center justify-between">
        <Link href="/" className="font-bold text-3xl text-[--foreground]">
          code with nizar
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks}
          </nav>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-[--card-background] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Open menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div className={`fixed top-0 left-0 w-full h-full bg-[--background] bg-opacity-95 backdrop-blur-sm z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex justify-end p-6">
          <button onClick={toggleMobileMenu} aria-label="Close menu">
            <X className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-16 gap-8">
          {navLinks}
          <button
            onClick={toggleTheme}
            className="p-3 mt-8 rounded-full bg-[--card-background] transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;