
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FloatingCard } from '@/components/3d/FloatingCard';
import { Download } from 'lucide-react';

export const Hero = () => {
  const handleResumeDownload = () => {
    // Create a downloadable resume content
    const resumeContent = `
ABIR KUNDU
Aspiring Software Engineer
4th year CSE student at BUP | CGPA: 3.78

Contact:
📧 abirkundu2025@gmail.com
📍 Mirpur DOHS, Dhaka 1216
🏡 Hometown: Patuakhali
🎯 Dream: PhD in CS, USA by 2028

Education:
• Bachelor of Science in Computer Science Engineering
  Bangladesh University of Professionals (BUP)
  CGPA: 3.78 (2021-2025)

Skills:
• Programming: Python, C/C++, Java, JavaScript, TypeScript, React, Node.js, PHP, SQL
• Tools: VS Code, Git/GitHub, Adobe Photoshop, Figma, Microsoft Office, Vercel
• Languages: Bangla (Advanced), English (Advanced), Hindi (Intermediate), French (Beginner)
• AI-Assisted Development & Prompt Engineering

Experience:
• Volunteer - IEEE BUP Student Branch (Jan 2023 – Present)
• Member & Designer - CS Club, Robotics Club, InfoTech Club (Feb 2022 – Present)  
• Teaching & Mentoring (June 2021 – Present)
• Freelance Projects & YouTube Creator

Interests:
• Machine Learning & Cybersecurity
• Web Development & UI/UX Design
• Problem Solving & Algorithms
• Teaching & Mentoring
• Graphic Design
• Cricket & Gaming
    `;

    const blob = new Blob([resumeContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Abir_Kundu_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 opacity-60">
          <FloatingCard 
            position={[0, 0, 0]} 
            text="React" 
            color="#0ea5e9" 
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute top-40 right-20 w-20 h-20 opacity-50">
          <FloatingCard 
            position={[0, 0, 0]} 
            text="Python" 
            color="#8b5cf6" 
            containerClassName="w-full h-full"
          />
        </div>
        <div className="absolute bottom-32 left-20 w-28 h-28 opacity-40">
          <FloatingCard 
            position={[0, 0, 0]} 
            text="Java" 
            color="#06b6d4" 
            containerClassName="w-full h-full"
          />
        </div>
      </div>

      <div className="text-center z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="gradient-text">Abir Kundu</span>
          </h1>
          
          <motion.h2 
            className="text-2xl md:text-3xl text-muted-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Aspiring Software Engineer
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            4th year CSE student at BUP with 3.78 CGPA | Passionate about creating impactful projects 
            that simplify life and help others
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <Button 
              className="neon-glow animate-pulse-slow bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              className="glass-card border-primary/20 hover:bg-primary/10 px-8 py-3 text-lg"
              onClick={handleResumeDownload}
            >
              <Download className="w-4 h-4 mr-2" />
              Download Resume
            </Button>
          </motion.div>
          
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="flex items-center gap-2">
              📍 Mirpur DOHS, Dhaka 1216
            </span>
            <span className="flex items-center gap-2">
              🏡 Hometown: Patuakhali
            </span>
            <span className="flex items-center gap-2">
              🎯 Dream: PhD in CS, USA by 2028
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};
