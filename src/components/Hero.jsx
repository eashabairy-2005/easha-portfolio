import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import hero from "../assets/hero.png";
import CV from "../assets/cv.pdf";

import { DownloadIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ darkMode }) => {
  const socialIcons = [
    { icon: instagram, alt: "Instagram" },
    { icon: tiktok, alt: "TikTok" },
    { icon: github, alt: "GitHub" },
    { icon: youtube, alt: "YouTube" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT SIDE */}
        <motion.div
          className="lg:w-1/2 w-full text-center lg:text-left"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* SOCIAL ICONS */}
          <div className="flex justify-center lg:justify-start gap-5 mb-6">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <img
                  src={social.icon}
                  alt={social.alt}
                  className="w-10 h-10"
                />
              </motion.a>
            ))}
          </div>

          {/* HEADING */}
          <motion.h1
            className="text-4xl sm:text-5xl font-bold mb-4"
            style={{ color: darkMode ? "white" : "black" }}
          >
            Hi, I'm Easha Bairy
          </motion.h1>

          {/* TEXT */}
          <motion.p
            className="mb-6 max-w-lg"
            style={{ color: darkMode ? "#d1d5db" : "#374151" }}
          >
            React Developer, UI Designer and Frontend Developer.
            I create responsive modern websites with beautiful UI.
          </motion.p>

          {/* BUTTONS */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <a href={CV} download>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-full font-semibold"
              >
                <DownloadIcon className="w-5 h-5 mr-2" />
                Download CV
              </motion.button>
            </a>

            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center px-6 py-3 border-2 border-orange-500 rounded-full font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </motion.button>
            </a>

          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="lg:w-1/2 w-full flex justify-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <motion.img
            src={hero}
            alt="hero"
            className="max-w-[350px] lg:max-w-[500px] w-full"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;