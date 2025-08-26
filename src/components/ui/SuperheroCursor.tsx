
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SuperheroCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isVisible, setIsVisible] = useState(true);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: 'transparent',
      border: '2px solid hsl(var(--primary))',
    },
    superman: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'hsl(220 100% 50%)',
      border: '3px solid hsl(0 100% 50%)',
      boxShadow: '0 0 20px hsl(220 100% 50%)',
    },
    spiderman: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      backgroundColor: 'hsl(0 100% 50%)',
      border: '2px solid hsl(240 100% 20%)',
      boxShadow: '0 0 15px hsl(0 100% 50%)',
    },
    hulk: {
      x: mousePosition.x - 22,
      y: mousePosition.y - 22,
      backgroundColor: 'hsl(120 100% 25%)',
      border: '3px solid hsl(120 100% 35%)',
      boxShadow: '0 0 25px hsl(120 100% 25%)',
    },
    ironman: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      backgroundColor: 'hsl(14 100% 50%)',
      border: '2px solid hsl(45 100% 50%)',
      boxShadow: '0 0 20px hsl(14 100% 50%)',
    },
    naruto: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      backgroundColor: 'hsl(30 100% 50%)',
      border: '3px solid hsl(220 100% 60%)',
      boxShadow: '0 0 18px hsl(30 100% 50%)',
    }
  };

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const mouseEnter = () => setIsVisible(true);
    const mouseLeave = () => setIsVisible(false);

    // Change cursor based on scroll position and time
    const handleCursorChange = () => {
      const heroes = ['superman', 'spiderman', 'hulk', 'ironman', 'naruto'];
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setCursorVariant(heroes[index % heroes.length] || 'default');
        }
      });
    };

    // Auto-rotate cursor every 3 seconds
    const interval = setInterval(() => {
      const heroes = ['superman', 'spiderman', 'hulk', 'ironman', 'naruto', 'default'];
      const randomHero = heroes[Math.floor(Math.random() * heroes.length)];
      setCursorVariant(randomHero);
    }, 3000);

    document.addEventListener('mousemove', mouseMove);
    document.addEventListener('scroll', handleCursorChange);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);

    return () => {
      document.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('scroll', handleCursorChange);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
      clearInterval(interval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <motion.div
        className="cursor-main fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: "tween",
          ease: "backOut",
          duration: 0.3
        }}
      />
      
      {/* Cursor trail effect */}
      <motion.div
        className="cursor-trail fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9998] opacity-50"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          backgroundColor: cursorVariant === 'superman' ? 'hsl(220 100% 50%)' :
                          cursorVariant === 'spiderman' ? 'hsl(0 100% 50%)' :
                          cursorVariant === 'hulk' ? 'hsl(120 100% 25%)' :
                          cursorVariant === 'ironman' ? 'hsl(14 100% 50%)' :
                          cursorVariant === 'naruto' ? 'hsl(30 100% 50%)' :
                          'hsl(var(--primary))'
        }}
        transition={{
          type: "tween",
          ease: "linear",
          duration: 0.1
        }}
      />

      {/* Hero indicator */}
      <motion.div
        className="fixed top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold pointer-events-none z-50 glass-card"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        key={cursorVariant}
      >
        🦸‍♂️ {cursorVariant.toUpperCase()}
      </motion.div>
    </>
  );
};

export default SuperheroCursor;
