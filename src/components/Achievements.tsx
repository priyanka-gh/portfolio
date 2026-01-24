import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      id: 1,
      title: "MLH Hackathon Best Hardware Hack",
      year: "2024",
      organization: "Major League Hacking",
      description: "Won the Best Hardware Hack award for innovative hardware integration in a software project",
      icon: "🏆",
      category: "Hackathon"
    },
    {
      id: 2,
      title: "MLH Hackathon Best Hardware Hack",
      year: "2023",
      organization: "Major League Hacking",
      description: "Second consecutive win for Best Hardware Hack, showcasing consistent innovation in hardware-software integration",
      icon: "🥇",
      category: "Hackathon"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  return (
    <section id="achievements" ref={ref} className="py-20 px-4 sm:px-6 lg:px-80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Awards & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Recognition for excellence in development, innovation, and community impact
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {achievements.map((achievement) => (
            <motion.div
              key={achievement.id}
              variants={itemVariants}
              transition={{ duration: 0.5 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="glass p-6 rounded-xl h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-purple-500/20 to-pink-600/20 rounded-full translate-y-8 -translate-x-8"></div>

                <div className="relative z-10">
                  {/* Icon and Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                    {achievement.title}
                  </h3>

                  {/* Organization and Year */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-400">{achievement.organization}</span>
                    <span className="text-sm font-semibold text-purple-400">{achievement.year}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Hover effect indicator */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "6+", label: "Awards Won" },
            { number: "15+", label: "Projects Completed" },
            { number: "3", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
