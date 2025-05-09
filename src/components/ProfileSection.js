'use client';

import React from 'react';
import Image from 'next/image';
import profileData from '../data/profileData';

import yourProfileImage from '../../public/images/profile.jpg';

const ProfileSection = () => {
  return (
    <section id="profile" className="section-container">
      <div className="mt-6">
        <div className="w-full h-128 relative bg-light-gray border border-gray-200 mb-6 flex items-center justify-center rounded-lg overflow-hidden">
            {yourProfileImage && (
                <Image
                src={yourProfileImage}
                alt="Gambar profil Anda"
                fill
                style={{ objectFit: 'cover' }}
                priority
                />
            )}
        </div>
        <h2 className="text-xl text-black opacity-100 text-opacity-100 font-bold section-heading">PROFILE</h2>
        <div className="prose max-w-none mt-4">
          <p className="text-lg leading-relaxed text-gray-700">{profileData.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;