import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Calendar, Code, Database, Shield, Gauge } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building real-world solutions with modern technologies
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="glass-card p-8 neon-glow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-2">Full-Stack Development Intern</h3>
                <p className="text-xl font-semibold text-foreground">OrangeToolz</p>
              </div>
              <div className="flex flex-col md:items-end mt-4 md:mt-0">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>July 20 – Aug 14, 2025</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dhaka, Uttara Sector 10</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-3">Project Overview</h4>
              <p className="text-muted-foreground leading-relaxed">
                Built a comprehensive <span className="text-primary font-semibold">Subscription Management System (SaaS)</span> from 
                concept to deployment using modern full-stack technologies, delivering a production-ready platform for subscription businesses.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2" />
                  Key Contributions
                </h4>
                <ul className="space-y-3">
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Developed platform using Next.js, React, TypeScript, Prisma, SQLite
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Designed relational database schema with 6 models
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Built REST APIs for authentication, subscriptions, and admin operations
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Created responsive UI & dashboards with Tailwind CSS + shadcn/ui
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Technical Features
                </h4>
                <ul className="space-y-3">
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Integrated real-time updates via Socket.IO
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Secured system with JWT, bcrypt, and RBAC
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Delivered admin analytics dashboard for revenue & users
                  </li>
                  <li className="text-muted-foreground flex items-start">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 mr-3 flex-shrink-0"></span>
                    Scalable architecture supporting future growth
                  </li>
                </ul>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                <Gauge className="w-5 h-5 mr-2" />
                Impact & Results
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Production Ready</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <p className="text-2xl font-bold text-primary">Real-time</p>
                  <p className="text-sm text-muted-foreground">Updates & Feedback</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-primary/10">
                  <p className="text-2xl font-bold text-primary">Scalable</p>
                  <p className="text-sm text-muted-foreground">Architecture</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Next.js', 'React', 'TypeScript', 'Prisma', 'SQLite', 
                  'Tailwind CSS', 'Socket.IO', 'JWT', 'shadcn/ui'
                ].map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};