import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "abircse22@gmail.com",
    link: "mailto:abircse22@gmail.com",
    color: "text-primary"
  },
  {
    icon: "🔗",
    label: "LinkedIn",
    value: "linkedin.com/in/abir-kundu-95b198221",
    link: "https://linkedin.com/in/abir-kundu-95b198221",
    color: "text-secondary"
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/AbirKundu",
    link: "https://github.com/AbirKundu",
    color: "text-accent"
  },
  {
    icon: "📸",
    label: "Instagram",
    value: "@abirkundu32",
    link: "https://instagram.com/abirkundu32",
    color: "text-primary"
  },
  {
    icon: "👨‍💻",
    label: "YouTube",
    value: "Abir Kundu",
    link: "https://youtube.com/@abirkundu",
    color: "text-secondary"
  }
];

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on innovative projects or discuss opportunities? 
            Let's turn ideas into reality together!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card className="glass-card p-8 neon-glow text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Dream & Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              🌟 Aspiring to pursue PhD in Computer Science in the USA before 2028 <br />
              🎯 Focus: Software Engineering, AI, and Research <br />
              💡 Mission: Making meaningful contributions to technology and society
            </p>
          </Card>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <motion.div
              key={contact.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card p-6 h-full neon-glow hover:neon-glow-purple transition-all duration-300 hover:scale-105 group">
                <div className="text-center">
                  <div className="text-3xl mb-3">{contact.icon}</div>
                  <h4 className="font-semibold mb-2 text-foreground">{contact.label}</h4>
                  <a 
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${contact.color} hover:underline break-all text-sm group-hover:text-primary transition-colors`}
                  >
                    {contact.value}
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Location Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6 mb-12"
        >
          <Card className="glass-card p-6 neon-glow-cyan text-center">
            <div className="text-2xl mb-3">📍</div>
            <h4 className="font-semibold mb-2 text-accent">Current Location</h4>
            <p className="text-muted-foreground">Mohammadpur, Dhaka 1207</p>
          </Card>
          
          <Card className="glass-card p-6 neon-glow-purple text-center">
            <div className="text-2xl mb-3">🏡</div>
            <h4 className="font-semibold mb-2 text-secondary">Hometown</h4>
            <p className="text-muted-foreground">Patuakhali</p>
          </Card>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="glass-card p-8 neon-glow">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Whether it's a groundbreaking project, collaboration opportunity, or just a tech chat - I'm all ears!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
                onClick={() => window.open('mailto:abircse22@gmail.com', '_blank')}
              >
                Send Email
              </Button>
              <Button 
                variant="outline" 
                className="glass-card border-secondary/20 hover:bg-secondary/10 px-8 py-3"
                onClick={() => window.open('https://linkedin.com/in/abir-kundu-95b198221', '_blank')}
              >
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};