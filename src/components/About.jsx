import about from "../assets/about.png";
import { motion } from "framer-motion";

const About = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          className="relative flex justify-center order-2 lg:order-1"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[320px] h-[320px] lg:w-[420px] lg:h-[420px] bg-gradient-to-r from-orange-500 to-yellow-400 blur-3xl opacity-30 rounded-full"></div>
          </div>

          {/* image box */}
          <motion.div
            className="relative w-[280px] h-[280px] lg:w-[380px] lg:h-[380px]"
            whileHover={{ scale: 1.05, rotate: 1 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-400 rounded-3xl rotate-6"></div>

            {/* floating image */}
            <motion.img
              src={about}
              alt="Easha Bairy profile"
              className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/20"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          className="order-1 lg:order-2 text-center lg:text-left"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* TITLE */}
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">
              Me
            </span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.div
            className={`p-6 rounded-2xl mb-6 shadow-lg border ${
              darkMode
                ? "bg-gray-800 border-gray-700 text-gray-300"
                : "bg-white border-gray-200 text-gray-700"
            }`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            I am <span className="font-bold">Easha Bairy</span> currently studying B.Sc. Computer Science (Hons.) at Midnapore College (Autonomous).  
            I am passionate about web development and enjoy building creative and functional web applications.  
            I love building modern, responsive and interactive web applications using React, Tailwind CSS, and modern UI tools.  
            My goal is to become a full-stack developer and build impactful digital products.
          </motion.div>

          {/* STATS */}
          <motion.div
            className="grid grid-cols-3 gap-4 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {[
              { num: "2+", label: "Years Learning" },
              { num: "6+", label: "Projects" },
              { num: "5+", label: "Technologies" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-xl text-center bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-2xl font-bold text-orange-400">
                  {item.num}
                </h2>
                <p className="text-sm">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* BUTTONS */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
          >

            <a href="#projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-orange-500 text-white font-semibold"
              >
                View Projects
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full border-2 border-orange-500 font-semibold ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Contact Me
              </motion.button>
            </a>

          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;