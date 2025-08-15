'use client';

import Link from 'next/link';
import Image from 'next/image'; 

import profilePic from '../../public/images/profile.png'; 

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[60vh] flex items-center py-16 md:py-20">

      <div 
        className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(147,51,234,0.3),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center text-center md:text-left gap-8 md:gap-12">
        
        <div className="relative w-40 h-40 md:w-48 md:h-48 mb-32 rounded-full overflow-hidden flex-shrink-0">
          <Image 
            src={profilePic} 
            alt="Foto Profil Nizar Afham" 
            layout="fill" 
            objectFit="cover"
            priority 
          />
        </div>

        <div className="flex-grow">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
            Nizar Afham
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-[--foreground] opacity-80">
            Full-Stack Developer
          </p>
          <p className="max-w-xl mx-auto md:mx-0 text-[--foreground] opacity-70 mb-8">
          A 6th-semester Computer Science student with a strong interest in software engineering. Experienced in developing various projects using Laravel, Next.js, JavaScript, and Flutter. Skilled in team collaboration and quick to adapt to new technologies and environments. Currently seeking opportunities to enhance technical skills and gain deeper understanding of best practices in the industry.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
          <Link href="#project" className="px-6 py-3  font-semibold rounded-lg hover:bg-[--card-background] transition-opacity">
              See Project
            </Link>
            <Link href="#contact" className="px-6 py-3 border border-[--subtle-border] font-semibold rounded-lg hover:bg-[--card-background] transition-colors">
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
