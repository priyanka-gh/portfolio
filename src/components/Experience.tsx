import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import tartan from '../tartanhq_logo.jpeg';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      id: 1,
      role: "Frontend Engineer",
      company: "Tartan",
      duration: "Aug 2024 – Present",
      location: "Gurugram, India",
      achievements: [
        "Led development as the sole frontend engineer for one of TartanHQ's primary products, ensuring seamless collaboration between Product, Design, and Engineering teams",
        "Owned the end-to-end User Onboarding experience, implementing an intuitive and efficient flow to enhance user engagement",
        "Built a highly customizable and scalable UI framework, enabling seamless adaptation for multiple client requirements",
        "Developed a Bulk CSV data upload solution over the SFTP protocol, streamlining data ingestion processes",
        "Designed and implemented an internal Management Information System (MIS) using Firebase SDK to enable real-time alerts and updates for the Verification web app",
        "Shipped an SDK for HRMS Sync, making integration seamless for external partners and reducing onboarding friction"
      ],
      technologies: ["React", "TypeScript", "Zustand", "Firebase SDK", "SFTP", "Custom Hooks", "UI Framework"]
    },
    {
      id: 2,
      role: "Frontend Engineer Intern",
      company: "Tartan",
      duration: "Feb 2024 – Aug 2024",
      location: "Gurugram, India",
      achievements: [
        "Developed responsive web applications using React and TypeScript",
        "Optimized global state management in ReactJS using Zustand, improving performance and maintainability",
        "Enhanced code quality and modularity by developing reusable Custom React Hooks, reducing redundancy and improving scalability",
        "Assisted in integrating RESTful APIs with frontend applications",
        "Built modern UI components with Tailwind CSS",
        "Participated in agile development processes and team meetings"
      ],
      technologies: ["React", "TypeScript", "Zustand", "Custom Hooks", "TailwindCSS"]
    }
  ];

  return (
    <section id="experience" ref={ref} className="px-4 sm:px-6 lg:px-16 xl:px-48 2xl:px-80">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="col-span-3"
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="glass p-8 rounded-xl hover:shadow-xl transition-all duration-300 h-full"
              >
                <div className="flex flex-col mb-6">
                  <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                  <span className="text-sm text-gray-400 bg-black/10 py-1 rounded-full">{exp.duration}</span>
                </div>

                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    <img src={tartan.src} alt="tartan" className="w-full h-full" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">{exp.company}</h4>
                    <p className="text-gray-400">{exp.location}</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-300">
                      <span className="text-blue-400 text-lg">•</span>
                      <span className="text-sm">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;