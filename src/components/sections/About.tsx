
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

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass-card p-8 neon-glow">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm Abir Kundu, a <span className="text-primary font-semibold">4th-year CSE student</span> at Bangladesh University of Professionals (BUP) 
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
                <li>👨‍💻 Machine Learning & Cybersecurity</li>
                <li>🎨 Web Development & UI/UX Design</li>
                <li>🧩 Problem Solving & Algorithms</li>
                <li>🏏 Cricket & Casual Gaming</li>
                <li>📸 Graphic Design</li>
                <li>👨‍🏫 Teaching & Mentoring</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow">
              <h4 className="text-xl font-semibold mb-3 text-primary">🎓 Academic Excellence</h4>
              <div className="space-y-2">
                <div>
                  <h5 className="font-semibold text-primary">B.Sc. CSE - BUP</h5>
                  <p className="text-sm text-muted-foreground">4th Year | CGPA: 3.78</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary">HSC</h5>
                  <p className="text-sm text-muted-foreground">Dhaka Residential Model College (DRMC)</p>
                  <p className="text-xs text-accent">Golden A+</p>
                </div>
                <div>
                  <h5 className="font-semibold text-primary">SSC</h5>
                  <p className="text-sm text-muted-foreground">GGMSC</p>
                  <p className="text-xs text-accent">Golden A+</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Extra Curricular Activities Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Extra Curricular Activities</span>
          </h3>
          
          {/* Featured CR Position - Centered in first row */}
          <div className="flex justify-center mb-8">
            <Card className="glass-card p-8 neon-glow max-w-2xl w-full">
              <h4 className="text-xl font-semibold mb-3 text-primary">🏛️ Elected Class Representative (CR)</h4>
              <p className="text-sm text-accent mb-3">Department of CSE, BUP | November 7, 2024 – Present</p>
              <ul className="text-muted-foreground space-y-2">
                <li>• Representing the class for three consecutive semesters (July–Dec 2024, Jan–Jul 2025, Aug 2025–Present)</li>
                <li>• Acting as a liaison between faculty and students, coordinating schedules, and resolving academic concerns</li>
                <li>• Strengthened leadership, communication, and organizational skills through active service</li>
              </ul>
            </Card>
          </div>
          
          {/* Other Activities in 2-column grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 neon-glow">
              <h4 className="text-lg font-semibold mb-2 text-primary">🏆 IEEE Volunteer</h4>
              <p className="text-sm text-accent mb-2">Jan 2023 – Present</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Organized national tech events</li>
                <li>• Led registration team at IICT 2024</li>
                <li>• Received certificate and jersey</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow-purple">
              <h4 className="text-lg font-semibold mb-2 text-secondary">🎨 Club Member & Designer</h4>
              <p className="text-sm text-accent mb-2">Feb 2022 – Present</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• CS Club, Robotics Club, InfoTech Club</li>
                <li>• Designed posters and digital content</li>
                <li>• Improved club branding</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow-cyan">
              <h4 className="text-lg font-semibold mb-2 text-accent">👨‍🏫 Teaching & Mentoring</h4>
              <p className="text-sm text-accent mb-2">June 2021 – Present</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Tutored peers in C, Python, web dev</li>
                <li>• 3+ years experience</li>
                <li>• Helped boost grades</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow">
              <h4 className="text-lg font-semibold mb-2 text-primary">🎥 Content Creation</h4>
              <p className="text-sm text-accent mb-2">Ongoing</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• YouTube channel tutorials</li>
                <li>• Educational content for CSE</li>
                <li>• Mini-projects development</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow-purple">
              <h4 className="text-lg font-semibold mb-2 text-secondary">🎤 Public Speaking</h4>
              <p className="text-sm text-accent mb-2">2022 – Present</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 15+ technical talks delivered</li>
                <li>• DBMS, Networking, Assembly, AI</li>
                <li>• Clear, engaging delivery</li>
              </ul>
            </Card>

            <Card className="glass-card p-6 neon-glow-cyan">
              <h4 className="text-lg font-semibold mb-2 text-accent">🌐 Languages</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between">
                  <span>Bangla</span>
                  <span className="text-primary">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span>English</span>
                  <span className="text-primary">Advanced</span>
                </div>
                <div className="flex justify-between">
                  <span>Hindi</span>
                  <span className="text-secondary">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span>French</span>
                  <span className="text-accent">Beginner</span>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
