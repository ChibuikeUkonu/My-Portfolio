"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    shortDescription: "A personal portfolio website showcasing my projects and skills.",
    description:"This portfolio website was built using Next.js, Tailwind CSS, and Framer Motion for smooth animations. It features a responsive design, dark mode support, and showcases my projects and skills.",
    images: ["/Portfolio.png"],
    tech: ["HTML", "CSS", "JAVASCIPT", "NEXT.JS"],
    githubUrl: "https://github.com/ChibuikeUkonu/My-Portfolio.git",
    liveUrl: "https://chibykeigbe.netlify.app/",
    status: "Completed",
    features: [
      "Responsive Design",
      "Dark Mode Support",
      "Project Showcase",
      "Smooth Animations"
    ],
   },
   {
    id: 2,
    title: "Static website",
    shortDescription: "A responsive static website built with Next.js and Tailwind CSS.",
    description: "A fully responsive static website with optimized performance and modern design.",
    images: ["/Home.png"],
    liveUrl: "https://neoconintegratedservices.com",   
     status: "Completed",
    githubUrl: "https://github.com/TLE84/NEOCON-INTEGRATED-SERVICES.git",
    tags: ["React", "Socket.io", "PostgreSQL", "Redis"],
    tech: ["HTML", "CSS", "JavaScript","React", "Node.js", "AWS"],
    features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "File Uploads"]
   },
   {
    id: 3,
    title: "Certification: Full Stack Web Development",
    shortDescription: "Earned a certification in Full Stack Web Development, demonstrating proficiency in both front-end and back-end technologies.",
    description: "This certification validates my skills in HTML, CSS, JavaScript, React, Node.js. It demonstrates my ability to build complete web applications and work with modern web technologies.",
    images: ["/Certificate one.png"],
     status: "Completed Course",
    tags: ["React", "Socket.io", "PostgreSQL", "Redis"],
    features: ["Comprehensive Curriculum", "Hands-on Projects", "Industry-Relevant Skills", "Certification Exam"]
   },
  // Add more projects here
];

export default function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);

  const openProject = (index) => {
    setSelectedIndex(index);
    setImageIndex(0);
  };

  const closeProject = () => {
    setSelectedIndex(null);
  };

  const nextProject = () => {
    setSelectedIndex((prev) => (prev + 1) % projects.length);
    setImageIndex(0);
  };

  const prevProject = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? projects.length - 1 : prev - 1
    );
    setImageIndex(0);
  };

  const nextImage = () => {
    setImageIndex((prev) =>
      (prev + 1) % projects[selectedIndex]?.images.length
    );
  };

  const prevImage = () => {
    setImageIndex((prev) =>
      prev === 0
        ? projects[selectedIndex]?.images.length - 1
        : prev - 1
    );
  };
  

  return (
    <section className="py-10 px-6 max-w-8xl mx-auto">
      <h2 className="text-3xl font-bold mb-7 text-center bg-gradient-to-r from-green-600 to-blue-900 text-transparent bg-clip-text">
        Completed Projects & Certifications
      </h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            onClick={() => openProject(index)}
          >
            <div className="relative h-48 w-full">
              <Image
                src={project.images?.[0] || "/placeholder.png"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <span className="absolute top-3 left-3 bg-green-600 text-xs px-3 py-1 rounded-full">
                {project.status}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech?.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-800 text-xs px-2 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-lg flex items-center justify-center p-6 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-gray-900 rounded-2xl max-w-4xl w-full relative">

              {/* Close Button */}
      <button
    onClick={closeProject}
    className="absolute top-40 right-4 z-30 bg-black/60 hover:bg-black/80 p-2 rounded-full text-white cursor-pointer transition-colors"
  >
    <X size={20} />
  </button>

              {/* Image Carousel */}
              <div className="relative h-64">
                <Image
                  src={
                    projects[selectedIndex]?.images[imageIndex]
                  }
                  alt="Project Image"
                  fill
                  className="object-cover"
                />

                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <ChevronRight />
                </button>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">
                  {projects[selectedIndex]?.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {projects[selectedIndex]?.description}
                </p>

                <ul className="list-disc list-inside mb-6 text-gray-300">
                  {projects[selectedIndex]?.features.map(
                    (feature) => (
                      <li key={feature}>{feature}</li>
                    )
                  )}
                </ul>

                <div className="flex gap-4">
                  <a
                    href={
                      projects[selectedIndex]?.githubUrl
                    }
                    target="_blank"
                    className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  <a
                    href={projects[selectedIndex]?.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-lg"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                </div>

                {/* Project Navigation */}
                <div className="flex justify-between mt-8">
                  <button onClick={prevProject}>
                    ← Previous
                  </button>
                  <button onClick={nextProject}>
                    Next →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

