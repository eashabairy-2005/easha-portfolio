import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t py-10 overflow-hidden"
    >
      <div className="container mx-auto px-4">

        <div className="flex flex-col items-center justify-center gap-6">

          {/* Logo */}
          <h2
            className="text-3xl font-bold"
            style={{
              background:
                "linear-gradient(to right, #f97316, #f59e0b)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Portfolio
          </h2>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
            {["home", "about", "skills", "projects", "contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`transition-all hover:text-orange-500 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              )
            )}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 flex-wrap justify-center">

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white">
              <FaGithub />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white">
              <FaLinkedin />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white">
              <FaTwitter />
            </a>

            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 text-white">
              <FaInstagram />
            </a>

            {/* ✅ WHATSAPP BUTTON */}
            <a
              href="https://wa.me/919933331005"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:scale-110 transition"
            >
              <FaWhatsapp />
            </a>

          </div>

          {/* Copyright */}
          <p className={`text-sm text-center ${
            darkMode ? "text-gray-400" : "text-gray-600"
          }`}>
            © {currentYear} Portfolio. All Rights Reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;