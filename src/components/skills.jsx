import laravel from "../assets/laravel.png";
import framer_motion from "../assets/framer_motion.png";
import vue from "../assets/vue.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import firebase from "../assets/firebase.png";
import python from "../assets/python.png";
import vite from "../assets/vite.png";

const Skills = ({ darkMode }) => {
  const skills = [
    { name: "Laravel", icon: laravel, level: 95, color: "from-orange-500 to-amber-500" },
    { name: "Framer Motion", icon: framer_motion, level: 90, color: "from-blue-500 to-cyan-500" },
    { name: "Vue", icon: vue, level: 88, color: "from-yellow-500 to-amber-500" },
    { name: "React", icon: react, level: 85, color: "from-cyan-500 to-blue-500" },
    { name: "Tailwind CSS", icon: tailwind, level: 92, color: "from-teal-500 to-cyan-500" },
    { name: "Firebase", icon: firebase, level: 92, color: "from-green-500 to-emerald-500" },
    { name: "Python", icon: python, level: 75, color: "from-blue-500 to-indigo-500" },
    { name: "Vite", icon: vite, level: 85, color: "from-red-500 to-orange-500" },
  ];

  return (
    <section
      id="skills"
      className="py-14 relative overflow-hidden"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
    >
      <div className="container px-5 mx-auto">
        
        {/* HEADING */}
        <div className="text-center mb-20">
          <h1
            className="sm:text-4xl text-3xl font-bold mb-4"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Skills
            </span>
          </h1>

          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* GRID */}
        <div className="flex flex-wrap -m-4">
          {skills.map((skill, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2 w-full">
              
              <div
                className="h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                style={{
                  background: darkMode
                    ? "linear-gradient(to bottom right, #1f2937, #111827)"
                    : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
              >
                
                {/* TOP */}
                <div className="flex items-center mb-6">
                  
                  {/* FIXED ICON SIZE */}
                  <div className="w-12 h-12 flex items-center justify-center">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  <h3
                    className="text-xl font-bold ml-4"
                    style={{ color: darkMode ? "white" : "#1f2937" }}
                  >
                    {skill.name}
                  </h3>
                </div>

                {/* PROGRESS */}
                <div className="flex justify-between mb-2">
                  <span style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}>
                    Proficiency
                  </span>

                  <span className="font-bold text-orange-400">
                    {skill.level}%
                  </span>
                </div>

                <div
                  className="w-full h-3 rounded-full overflow-hidden"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#e5e7eb",
                  }}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;