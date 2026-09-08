'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="w-full pt-20 bg-surface-container-lowest min-h-screen">
        <div className="max-w-[1280px] mx-auto px-space-md lg:px-space-xl">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
