
import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { FloatingCard } from '@/components/3d/FloatingCard';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "C++", "Java", "JavaScript", "TypeScript", "SQL", "PHP"],
    color: "#0ea5e9"
  },
  {
    title: "Web Development",
    skills: ["HTML", "CSS", "Tailwind", "React", "Node.js", "Express.js", "Firebase", "MongoDB"],
    color: "#8b5cf6"
  },
  {
    title: "Computer Science Core",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS", "Operating Systems", "Assembly Language"],
    color: "#06b6d4"
  },
  {
    title: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Cisco Packet Tracer", "MySQL", "emu8086", "Flex & Bison", "Android Studio", "Vercel"],
    color: "#f59e0b"
  },
  {
    title: "Creative & Design Tools",
    skills: ["Adobe Photoshop", "Figma", "Canva", "Microsoft Office", "Graphic Design (4+ years)"],
    color: "#ef4444"
  },
  {
    title: "AI & Modern Development",
    skills: ["AI-Assisted Development", "Prompt Engineering", "GitHub Copilot", "ChatGPT Integration", "Git/GitHub"],
    color: "#10b981"
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 left-10 w-16 h-16">
          <FloatingCard position={[0, 0, 0]} text="React" color="#0ea5e9" containerClassName="w-full h-full" />
        </div>
        <div className="absolute top-20 right-20 w-20 h-20">
          <FloatingCard position={[0, 0, 0]} text="Python" color="#8b5cf6" containerClassName="w-full h-full" />
        </div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12">
          <FloatingCard position={[0, 0, 0]} text="Java" color="#06b6d4" containerClassName="w-full h-full" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through 4+ years of learning and practical experience
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card h-full p-6 neon-glow hover:neon-glow-purple transition-all duration-300">
                <h3 className="text-xl font-bold mb-4" style={{ color: category.color }}>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="px-3 py-2 glass-card text-sm rounded-lg border border-white/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Specialized Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">Specialized Expertise</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="glass-card p-6 neon-glow">
              <h4 className="text-lg font-semibold mb-3 text-primary">🤖 AI-Assisted Development</h4>
              <p className="text-sm text-muted-foreground">
                Experienced in utilizing AI tools (ChatGPT, GitHub Copilot) for efficient coding, 
                debugging, and project prototyping.
              </p>
            </Card>
            <Card className="glass-card p-6 neon-glow-purple">
              <h4 className="text-lg font-semibold mb-3 text-secondary">⚡ Prompt Engineering</h4>
              <p className="text-sm text-muted-foreground">
                Skilled in crafting precise prompts for generating structured code, solving 
                algorithmic problems, and designing UI/UX using AI models.
              </p>
            </Card>
          </div>
        </motion.div>

        {/* Experience Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          <Card className="glass-card p-6 text-center neon-glow">
            <div className="text-3xl font-bold text-primary mb-2">4+</div>
            <div className="text-muted-foreground">Years of Graphic Design</div>
          </Card>
          <Card className="glass-card p-6 text-center neon-glow-purple">
            <div className="text-3xl font-bold text-secondary mb-2">3+</div>
            <div className="text-muted-foreground">Years of Teaching Experience</div>
          </Card>
          <Card className="glass-card p-6 text-center neon-glow-cyan">
            <div className="text-3xl font-bold text-accent mb-2">3.78</div>
            <div className="text-muted-foreground">CGPA at BUP</div>
          </Card>
          <Card className="glass-card p-6 text-center neon-glow">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Technical Talks Delivered</div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
