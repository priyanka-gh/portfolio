import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import me from '../me.jpeg'

const TypewriterText = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Frontend Engineer | ReactJS | NextJS';
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <span className="text-xl sm:text-xl text-gray-300 font-thin">
      {displayText}
      {/* <span className="animate-pulse">|</span> */}
    </span>
  );
};

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-16 xl:px-48 2xl:px-80">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Priyanka Ghansela</span>{' '}
            <span className="text-4xl">👋</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8"
          >
            <TypewriterText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-md text-gray-400 mb-12 max-w-2xl"
          >
            Passionate about creating beautiful, responsive web applications with modern technologies.
            I love turning complex problems into simple, elegant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
          >
            <motion.a
              href="https://drive.google.com/file/d/170LImy_uq8AWz-PbwGK5AEkcwkW7ZZ91/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300 underline decoration-blue-400 underline-offset-4 hover:decoration-blue-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right side - Animated illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated coding illustration */}
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-80 h-80 lg:w-96 lg:h-96 relative"
            >
              {/* Main circle */}
              <div className="w-full h-full rounded-full glass pulse-glow flex items-center justify-center">
                <div className="text-6xl">
                  <img src={me.src} alt="me" className="w-[300px] h-full" />
                </div>
              </div>
              {/* {['</>', '{}', '[]', '()'].map((symbol, index) => (
                <motion.div
                  key={symbol}
                  animate={{
                    y: [0, -20, 0],
                    x: [0, Math.sin(index) * 30, 0],
                    rotate: [0, 360, 0]
                  }}
                  transition={{
                    duration: 3 + index,
                    repeat: Infinity,
                    delay: index * 0.5,
                    ease: "easeInOut"
                  }}
                  className="absolute text-2xl text-white/80 font-mono"
                  style={{
                    top: `${20 + index * 15}%`,
                    left: `${20 + index * 20}%`,
                  }}
                >
                  {symbol}
                </motion.div>
              ))} */}

              {/* Animated dots */}
              {[...Array(6)].map((_, index) => (
                <motion.div
                  key={index}
                  animate={{
                    scale: [0.5, 1, 0.5],
                    opacity: [0.3, 1, 0.3]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    top: `${30 + (index % 3) * 20}%`,
                    left: `${10 + Math.floor(index / 3) * 80}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;