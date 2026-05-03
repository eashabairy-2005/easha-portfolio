import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.png";
import project6 from "../assets/project6.png";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      desc: "Ecommerce is the buying and selling of goods and services over the internet. It involves the digital transfer of money and data to complete online transactions.",
      image: project1,
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      id: 2,
      title: "AI-powered crop disease detection",
      desc: "AI Smart Crop Disease Detection System A deep learning-powered web app that identifies 38+ plant diseases from leaf images with 95% accuracy..",
      image: project2,
      tags: ["React Native", "Firebase","OpenAI"],
    },
    {
      id: 3,
      title: "Content Generator",
      desc: "Generate, schedule and automate your social media posts with AI..",
      image: project3,
      tags: ["Python", "OpenAI"],
    },
    {
      id: 4,
      title: "Dashboard",
      desc: "This page provides status information on the services that are part of Google Workspace..",
      image: project4,
      tags: ["Vue.js", "Chart.js"],
    },
    {
      id: 5,
      title: "Task Management",
      desc: "Task management is the process of planning, organizing, prioritizing, and tracking tasks .",
      image: project5,
      tags: ["Laravel", "Vue.js"],
    },
    {
      id: 6,
      title: "Scientific Calculator",
      desc: "A beautiful online scientific calculator with advanced features.",
      image: project6,
      tags: ["Next.js", "Three.js"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
      className="relative py-24"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12" data-aos="fade-up">
          <h2
            className="text-3xl sm:text-4xl font-bold mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              Projects
            </span>
          </h2>

          <p style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>
            A showcase of my recent work
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-xl border transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #1f2937, #111827)"
                  : "linear-gradient(to right, #ffffff, #f3f4f6)",
                borderColor: darkMode ? "#374151" : "#e5e7eb",
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >

              {/* IMAGE */}
              <div className="h-44 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">

                <h3
                  className="text-lg font-bold mb-2"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm mb-3 line-clamp-3"
                  style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
                >
                  {project.desc}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs rounded-md"
                      style={{
                        backgroundColor: darkMode ? "#1f2937" : "#e5e7eb",
                        color: darkMode ? "#d1d5db" : "#4b5563",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2">

                  {/* CODE */}
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg transition-all"
                    style={{
                      backgroundColor: darkMode ? "#374151" : "#f3f4f6",
                      color: darkMode ? "white" : "#374151",
                    }}
                  >
                    <FaGithub />
                    Code
                  </a>

                  {/* DEMO */}
                  <a
                    href="#"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm rounded-lg text-white transition-all hover:shadow-lg hover:shadow-orange-500/30"
                    style={{
                      background:
                        "linear-gradient(to right, #f97316, #f59e0b)",
                    }}
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;