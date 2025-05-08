'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FileText } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return pathname === '/';
    }
    if (href.startsWith('/#')) {
      const pathPart = href.split('#')[0] || '/';
      return pathname === pathPart;
    }
    return pathname === href;
  };

  return (
    <header className="py-6">
      <div className="flex items-center justify-between">
        <Link href="/" className={`font-bold text-3xl transition-all duration-300  ${pathname === '/' ? 'font-medium' : ''}`}>
          code with nizar
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            href="/"
            className={`text-lg transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-300 ${isActive('/') ? 'font-medium' : ''}`}
          >
            Profile
          </Link>

          <Link
            href="/#education"
            className={`text-lg transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200 ${isActive('/#education') ? 'font-medium' : ''}`}
          >
            Education
          </Link>

          <Link
            href="/#project"
            className={`text-lg transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200 ${isActive('/#project') ? 'font-medium' : ''}`}
          >
            Projects
          </Link>

          <Link
            href="#"
            className="text-lg flex items-center transition-all duration-300 hover:underline-offset-4 hover:underline decoration-2 decoration-black-200"
          >
            <FileText size={16} className="mr-1"/>
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;