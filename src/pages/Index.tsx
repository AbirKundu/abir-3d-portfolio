import React from 'react';
import { Navigation } from '@/components/navigation/Navigation';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/layout/Footer';
import { FloatingParticles } from '@/components/3d/FloatingParticles';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* 3D Background Particles */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
