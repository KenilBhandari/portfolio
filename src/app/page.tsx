'use client'
import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Zap, Users, LayoutDashboard, Server, Database, GitBranch } from 'lucide-react';

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
 
  {
    title: "FinVest – Simulated Stock Investing Platform",
    description:
      "A full-stack investing simulator inspired by Groww. Built with Next.js, TypeScript, and Razorpay integration, it lets users buy virtual stocks with real payments, track their performance, and compete on a public leaderboard.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Razorpay", "MongoDB"],
    image: "/Hero-section.png",
    github: "https://finvest-pied.vercel.app/",
    live: "https://finvest-pied.vercel.app/"
  },
   {
    title: "TrioFin – Lifetime Financial Planner",
    description:
      "A simple yet powerful tool built with React and Tailwind CSS to help users plan savings, expenses, and investments over 40 years. It takes a clean monthly income input and generates a long-term financial forecast using Chart.js.",
    tech: ["React", "Tailwind", "Chart.js"],
    image: "/Trio-Hero.png",
    github: "https://triofin.netlify.app/",
    live: "https://triofin.netlify.app/"
  }
];


const skills = [
  { name: "Full-Stack Development", icon: Code, level: 95 },
  { name: "Frontend Engineering (React/Next.js)", icon: LayoutDashboard, level: 92 },
  { name: "Backend Development (Node.js, Express)", icon: Server, level: 90 },
  { name: "UI/UX Design & Prototyping", icon: Palette, level: 88 },
  { name: "Database Management (MongoDB, SQL)", icon: Database, level: 85 },
  { name: "Version Control (Git, GitHub)", icon: GitBranch, level: 90 }
];


  const ScrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-900/50 backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => ScrollToSection(item.toLowerCase())}
                  className="relative hover:text-blue-400 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          {[...Array(45)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${2 + Math.random() * 0.2}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          {/* Profile Image in Blob Shape */}
          <div className="flex justify-center mb-8">
            <div className="flex justify-center mb-8">
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  {/* Outer Gradient Border */}
                  <div
                    className="absolute inset-0 p-[6px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 rounded-[40%] shadow-2xl"
                    style={{ clipPath: "url(#blobClip)" }}
                  >
                    {/* Inner Solid Border */}
                    <div
                      className="w-full h-full bg-[#0f172a] p-[4px] rounded-[40%]"
                      style={{ clipPath: "url(#blobClip)" }}
                    >
                      {/* Actual Image */}
                      <img
                        src="/Profile_1.png"
                        alt="Kenil Bhandari"
                        className="w-full h-full object-cover rounded-[40%]"
                        style={{ clipPath: "url(#blobClip)" }}
                      />
                    </div>
                  </div>

                  {/* SVG Clip Path Definition */}
                  <svg width="0" height="0">
                    <defs>
                      <clipPath id="blobClip" clipPathUnits="objectBoundingBox">
                        <path d="M0.76,0.08 C0.92,0.21,1,0.47,0.92,0.69 C0.86,0.91,0.52,1,0.38,0.95 C0.16,0.91,0.01,0.75,0.04,0.43 C0.07,0.2,0.27,-0.06,0.52,0.01 C0.61,0.03,0.7,0.04,0.76,0.08Z" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Text Section */}
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Kenil Bhandari
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Full-Stack Developer & UI/UX Designer crafting digital experiences
              that matter
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => ScrollToSection("projects")}
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300"
              >
                View My Work
              </button>
              <button
                onClick={() => ScrollToSection("contact")}
                className="px-8 py-4 border-2 border-gray-600 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transform hover:-translate-y-1 transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a final-year B.Tech Computer Science student with a strong
                passion for building real-world projects. I love bringing ideas
                to life through full-stack web development, with a focus on
                clean design and responsive interfaces.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mt-4">
                Outside of coding, I enjoy exploring new tech stacks, sketching
                intuitive UI concepts, and turning concepts into code. Always
                learning, always building.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <skill.icon className="w-5 h-5 text-blue-400" />
                      <span className="font-semibold">{skill.name}</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <img
                  src="/dev.jpg"
                  alt="Profile"
                  className="w-full rounded-xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Vision-Driven Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-36">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-65 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Have a project in mind? I'd love to hear about it and discuss how we
            can bring your ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a
              href="mailto:kenilbhandari9@gmail.com"
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <Mail className="w-5 h-5 text-blue-400" />
              kenilbhandari9@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/kenil-bhandari-a7a471253"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <Linkedin className="w-5 h-5 text-blue-400" />
              LinkedIn
            </a>
            <a
              href="https://github.com/KenilBhandari"
              target="_blank"
              className="flex items-center gap-3 px-6 py-3 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <Github className="w-5 h-5 text-blue-400" />
              GitHub
            </a>
          </div>

          <a href="mailto:kenilbhandari9@gmail.com?subject=Let's%20Talk">
          <button className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300">
              Start a Conversation
          </button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2025. Crafted with ❤️ by Kenil Bhandari.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;