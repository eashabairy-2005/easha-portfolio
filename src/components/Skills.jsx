import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
  FaDocker,
  FaAndroid,
} from "react-icons/fa";

import {
  SiMysql,
  SiCplusplus,
  SiC,
  SiShell,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: <FaHtml5 />, level: 70 },
        { name: "CSS", icon: <FaCss3Alt />, level: 55 },
        { name: "JavaScript", icon: <FaJs />, level: 60 },
      ],
    },

    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 50 },
        { name: "PHP", icon: <FaPhp />, level: 40 },
        { name: "SQL", icon: <SiMysql />, level: 70 },
      ],
    },

    {
      title: "Languages",
      skills: [
        { name: "C", icon: <SiC />, level: 70 },
        { name: "C++", icon: <SiCplusplus />, level: 60 },
        { name: "Java", icon: <FaJava />, level: 50 },
        { name: "Python", icon: <FaPython />, level: 60 },
      ],
    },

    {
      title: "Tools & Others",
      skills: [
        { name: "Android Studio", icon: <FaAndroid />, level: 70 },
        { name: "Docker", icon: <FaDocker />, level: 40 },
        { name: "Shell Script", icon: <SiShell />, level: 50 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#070816] text-white py-20 px-5"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-purple-400 mb-4">
            Skills
          </h2>

          <p className="text-gray-400">
            My technical skills and technologies
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[#111827]/80 border border-purple-500/20 rounded-2xl p-6 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >

              {/* Category Title */}
              <h3 className="text-2xl font-semibold text-center text-purple-400 mb-8">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="space-y-6">

                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >

                    {/* Skill Name */}
                    <div className="flex justify-between items-center mb-2">

                      <div className="flex items-center gap-3">
                        <span className="text-xl text-purple-300">
                          {skill.icon}
                        </span>

                        <span className="text-gray-200">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm text-purple-300">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 bg-gray-700 rounded-full overflow-hidden">

                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                      ></motion.div>

                    </div>

                  </motion.div>
                ))}

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;