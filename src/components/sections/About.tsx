import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

export const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineering Student | Tech Enthusiast | Proud Hindu 🕉️ | Born on 26th December
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-8 neon-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Abir Kundu, a 3rd-year CSE student at Bangladesh University of Professionals (BUP) 
                with a CGPA of 3.78. I'm passionate about software engineering, problem solving, and 
                creating impactful projects that simplify life and help others.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My journey started with Python, C, C++ & Java, and gradually expanded into Web Development, 
                DBMS, and React. I also have over 4 years of graphic design skills and 3+ years of 
                teaching experience, which shaped my ability to explain complex topics easily.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My dream is to pursue higher studies (PhD) in Computer Science in the USA before 2028, 
                with a focus on software engineering, AI, and research, while making meaningful 
                contributions to technology and society.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="glass-card p-6 neon-glow-purple">
              <h4 className="text-xl font-semibold mb-3 text-secondary">💛 Helping Hearts</h4>
              <p className="text-muted-foreground">
                Helping others & contributing to community is my thing. I believe in turning dreams into reality.
              </p>
            </Card>

            <Card className="glass-card p-6 neon-glow-cyan">
              <h4 className="text-xl font-semibold mb-3 text-accent">🌟 Interests & Hobbies</h4>
              <ul className="text-muted-foreground space-y-2">
                <li>👨‍💻 Coding & Learning new technologies</li>
                <li>🏏 Playing cricket with friends</li>
                <li>🎮 Gaming in free time</li>
                <li>📸 Capturing memories with friends</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow">
              <h4 className="text-xl font-semibold mb-3 text-primary">🎓 Academic Excellence</h4>
              <ul className="text-muted-foreground space-y-1">
                <li><strong>BUP CSE:</strong> CGPA 3.78</li>
                <li><strong>HSC:</strong> Golden A+</li>
                <li><strong>SSC:</strong> Golden A+</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};