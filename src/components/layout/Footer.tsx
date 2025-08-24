import React from 'react';
import { motion } from 'framer-motion';

export const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="mb-6">
            <h3 className="text-2xl font-bold gradient-text mb-2">Abir Kundu</h3>
            <p className="text-muted-foreground">Aspiring Software Engineer | Turning Dreams into Reality</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            {[
              { icon: "📧", href: "mailto:abircse22@gmail.com", label: "Email" },
              { icon: "🔗", href: "https://linkedin.com/in/abir-kundu-95b198221", label: "LinkedIn" },
              { icon: "🐙", href: "https://github.com/AbirKundu", label: "GitHub" },
              { icon: "📸", href: "https://instagram.com/abirkundu32", label: "Instagram" },
              { icon: "👨‍💻", href: "https://youtube.com/@abirkundu", label: "YouTube" }
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl hover:text-primary transition-colors duration-300"
                title={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
          
          <div className="text-sm text-muted-foreground">
            <p className="mb-2">© 2024 Abir Kundu. Built with ❤️ using React & Three.js</p>
            <p>🌟 Engineering Student | 📿 Proud Hindu | 🎂 Born December 26th | 💛 Helping Hearts</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};