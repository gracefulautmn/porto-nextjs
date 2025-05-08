// components/Footer.js
import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaGithub, FaWhatsapp, FaLinkedin } from 'react-icons/fa';

const Footer = () => {

  return (
    <footer className="w-full px-4 lg:w-1/2 mx-auto py-8 text-xs text-opacity-100 opacity-100 text-gray-500 text-center border-t border-gray-200 flex flex-col items-center justify-center" style={{ backgroundColor: '#E4E0E1' }}>
      <div className="mb-4 mr-100 md:mr-180">
        <Link href="/" className="font-bold text-3xl">
          code with nizar
        </Link>
        <div className="flex space-x-4 mt-2">
          <Link href="https://instagram.com/ny.zaru" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <FaInstagram size={30} />
          </Link>
          <Link href="https://github.com/nizarafham" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <FaGithub size={30} />
          </Link>
          <Link href="https://wa.me/+6281218945093" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <FaWhatsapp size={30} />
          </Link>
          <Link href="https://linkedin.com/in/nizarafhamaflaha" target="_blank" rel="noopener noreferrer" className="hover:opacity-75">
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>
      <div className="text-lg">
        Copyright © 2025 code-with-nizar. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;