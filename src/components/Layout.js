'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-[120rem] flex flex-col items-center overflow-x-hidden">
      
      <div 
        className="absolute bottom-0 right-0 -z-10 w-full h-[120rem] bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(147,51,234,0.2),rgba(255,255,255,0))]"
        aria-hidden="true"
      />

      <div className="w-full px-4 lg:w-1/2 mx-auto z-10">
        <Navbar />
        <main>{children}</main>
      </div>

      <div className="w-full z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
