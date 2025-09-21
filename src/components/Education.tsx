import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Vivekananda Institute of Professional Studies",
      duration: "2022 – 2024",
      cgpa: "8.595",
    },
    {
      id: 2,
      degree: "Bachelor of Science (Hons) Computer Science",
      institution: "Dyal Singh College, University of Delhi",
      duration: "2019 – 2022",
      cgpa: "8.446",
    },
    {
      id: 3,
      degree: "Class XII",
      institution: "JKG International School",
      duration: "2019",
      cgpa: "94%",
    },
    {
      id: 4,
      degree: "Class X",
      institution: "JKG International School",
      duration: "2017",
      cgpa: "8.6",
    }
  ];

  return (
    <section id="education" ref={ref} className="py-20 px-4 sm:px-6 lg:px-80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group col-span-1"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass p-6 rounded-xl hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                    <p className="text-gray-500 text-sm">{edu.duration}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold gradient-text text-white text-sm">{edu.cgpa}</div>
                  </div>
                </div>

                {/* Hover effect indicator */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
