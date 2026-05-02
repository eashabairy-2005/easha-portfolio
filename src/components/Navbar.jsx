import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const lightColors = {
    navBg: "bg-gradient-to-r from-orange-200 to-white",
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-800",
    textHover: "text-orange-500",
    textActive: "text-orange-600",
    indicator: "from-orange-500 to-amber-500",
    button: "from-orange-500 to-amber-500",
  };

  const darkColors = {
    navBg: "bg-gradient-to-r from-[#0f172a] to-[#1e293b]",
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    textHover: "text-cyan-400",
    textActive: "text-cyan-400",
    indicator: "from-cyan-500 to-blue-500",
    button: "from-cyan-500 to-blue-500",
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 shadow-lg ${colors.navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.h1
            whileHover={{ scale: 1.05 }}
            className={`text-2xl font-bold ${colors.textPrimary}`}
          >
                                   Portfolio
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() =>
                  setActiveSection(item.name.toLowerCase())
                }
                className="relative"
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className={`font-medium transition ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  } hover:${colors.textHover}`}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={`absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r ${colors.indicator}`}
                  />
                )}
              </a>
            ))}

            {/* Theme Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`hidden lg:block px-6 py-2 font-semibold rounded-full bg-gradient-to-r ${colors.button} text-white shadow-md hover:shadow-lg`}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${
                    darkMode ? "text-white" : "text-gray-700"
                  }`}
                />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`lg:hidden mt-4 rounded-2xl p-6 shadow-xl ${
              darkMode
                ? "bg-[#111827]"
                : "bg-white"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => {
                    setActiveSection(
                      item.name.toLowerCase()
                    );
                    setIsMenuOpen(false);
                  }}
                  className={`font-medium ${
                    activeSection ===
                    item.name.toLowerCase()
                      ? colors.textActive
                      : colors.textSecondary
                  }`}
                >
                  {item.name}
                </a>
              ))}

              <motion.a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.95 }}
                className={`block py-3 px-4 text-center font-semibold rounded-lg bg-gradient-to-r ${colors.button} text-white shadow-md`}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;