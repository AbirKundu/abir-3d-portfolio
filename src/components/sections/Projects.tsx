import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const featuredProjects = [
  {
    title: "Subscription System React Project",
    description: "React + TypeScript subscription workflow project with modern UI and robust architecture.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    year: "2024",
    category: "Frontend/React",
    featured: true
  },
  {
    title: "Gita Guru Knowledge Hub",
    description: "Knowledge platform built with TypeScript for spiritual and educational content.",
    tech: ["TypeScript", "React", "Firebase"],
    year: "2024",
    category: "Frontend/React",
    featured: true
  },
  {
    title: "React Native Tic-Tac-Toe",
    description: "Interactive mobile game using React Native with smooth animations and multiplayer support.",
    tech: ["React Native", "JavaScript", "Expo"],
    year: "2024",
    category: "Mobile App",
    featured: true
  },
  {
    title: "React Movie App",
    description: "Movie database web app with search functionality and responsive UI.",
    tech: ["React", "JavaScript", "API Integration"],
    year: "2024",
    category: "Frontend/React",
    featured: true
  },
  {
    title: "Crime Watch Bangla Alert",
    description: "A social impact project built with TypeScript for community safety.",
    tech: ["TypeScript", "React", "Firebase"],
    year: "2024",
    category: "Frontend/React",
    featured: true
  },
  {
    title: "Aahar Hope Share",
    description: "Community/charity project connecting food donors with those in need.",
    tech: ["TypeScript", "React", "MongoDB"],
    year: "2024",
    category: "Frontend/React",
    featured: true
  }
];

const otherProjects = [
  {
    title: "BUP Shuttle Companion",
    description: "Java-based transport assistant app for students with route optimization.",
    tech: ["Java", "Android Studio", "SQLite"],
    year: "2023",
    category: "Academic/Java"
  },
  {
    title: "Data Entry Form Project",
    description: "HTML-based form project with validation and data processing.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    category: "Web Development"
  },
  {
    title: "GamendBubble",
    description: "HTML/CSS game with interactive animations and score tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
    year: "2023",
    category: "Web Development"
  },
  {
    title: "Arduino UNO Project",
    description: "IoT project with sensors and automation using Arduino programming.",
    tech: ["Arduino", "C++", "IoT"],
    year: "2023",
    category: "Hardware/IoT"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing strong frontend/React skills and innovative solutions
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full p-6 neon-glow hover:neon-glow-purple transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-between items-start mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.year}
                  </Badge>
                  <Badge variant="outline" className="border-secondary/30 text-secondary">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-secondary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs glass-card rounded border border-accent/20 text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="glass-card border-primary/20 hover:bg-primary/10">
                    View Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90">
                    Live Demo
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Other Notable Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            <span className="gradient-text">Other Notable Projects</span>
          </h3>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card p-4 neon-glow-cyan hover:neon-glow transition-all duration-300">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-accent">{project.title}</h4>
                    <Badge variant="outline" className="border-muted-foreground/30 text-muted-foreground text-xs">
                      {project.year}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted/20 rounded text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card p-8 neon-glow max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Explore More on GitHub</h3>
            <p className="text-muted-foreground mb-6">
              Check out my complete project portfolio including academic work, assignments, and experimental projects.
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              Visit GitHub Profile
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
