'use client';

import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full mt-24 border-t border-[--subtle-border] bg-[--card-background]">
      <div className="w-full px-4 lg:w-1/2 mx-auto py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-center md:text-left">
            <p className="text-sm text-[--foreground] opacity-70">
              © {new Date().getFullYear()} Nizar Afham. All Rights Reserved.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Link href="https://instagram.com/ny.zaru" target="_blank" rel="noopener noreferrer" className="text-[--foreground] opacity-70 hover:opacity-100 hover:text-[--primary] transition-all">
              <FaInstagram size={24} />
            </Link>
            <Link href="https://github.com/nizarafham" target="_blank" rel="noopener noreferrer" className="text-[--foreground] opacity-70 hover:opacity-100 hover:text-[--primary] transition-all">
              <FaGithub size={24} />
            </Link>
            <Link href="https://wa.me/+6281218945093" target="_blank" rel="noopener noreferrer" className="text-[--foreground] opacity-70 hover:opacity-100 hover:text-[--primary] transition-all">
              <FaWhatsapp size={24} />
            </Link>
            <Link href="https://linkedin.com/in/nizarafhamaflaha" target="_blank" rel="noopener noreferrer" className="text-[--foreground] opacity-70 hover:opacity-100 hover:text-[--primary] transition-all">
              <FaLinkedin size={24} />
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
