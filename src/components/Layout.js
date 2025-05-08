'use client';

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen flex flex-col items-center" style={{ backgroundColor: '#E9EFEC' }}>

      <div className="w-full px-4 lg:w-1/2 mx-auto shadow-md" style={{ backgroundColor: '#E9EFEC' }}>
        <Navbar />
        <main>{children}</main>
      </div>

      <Footer />

    </div>
  );
};

export default Layout;