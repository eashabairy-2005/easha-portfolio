import { useEffect, useState } from "react";

import instagram from "../assets/instagram.png";
import tiktok from "../assets/tiktok.png";
import github from "../assets/github.png";
import youtube from "../assets/youtube.png";
import hero from "../assets/hero.png";
import CV from "../assets/cv.pdf";

import { DownloadIcon, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = ({ darkMode }) => {

  // 🔥 Typing animation text
  const texts = [
    "React Developer",
    "UI Designer",
    "Frontend Developer",
  ];

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 120);
    } 
    else if (isDeleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 60);
    } 
    else if (!isDeleting && charIndex > currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1000);
    } 
    else if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

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

          {/* ✨ TYPING TEXT */}
          <motion.p
            className="mb-6 max-w-lg text-lg font-medium"
            style={{ color: darkMode ? "#d1d5db" : "#374151" }}
          >
            I am a{" "}
            <span className="text-orange-500 font-semibold">
              {displayText}
            </span>
            <span className="animate-pulse">|</span>
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
          transition={{ duration: 0.8 }}
        >
          <div className="relative flex justify-center items-center">

            {/* Glow background */}
            <div className="absolute w-[280px] h-[280px] lg:w-[350px] lg:h-[350px] bg-orange-500 blur-3xl opacity-30 rounded-full"></div>

            {/* Hero image with animation */}
            <motion.img
              src={hero}
              alt="hero"
              className="relative z-10 max-w-[350px] lg:max-w-[500px] w-full"
              animate={{
                y: [0, -15, 0],
                rotate: [-1, 1, -1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.08 }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;