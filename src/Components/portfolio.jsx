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
      <h2 className="text-3xl font-bold mb-7 text-center">
        Completed Projects
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
            <div className="relative h-48">
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

// // components/Portfolio.jsx
// "use client";

// import { useState } from 'react';
// import { portfolio } from '../data/portfolio';
// import { ExternalLink, Eye } from 'lucide-react';
// import { Github } from 'lucide-react';

// const Portfolio = () => {
//   const [activeFilter, setActiveFilter] = useState('all');
  
  
//   // Get unique tags for filtering
//   const allTags = ['all', ...new Set(portfolio.flatMap(portfolio => portfolio.tags))];
  
//   // Filter projects based on selected tag
//   const filteredProjects = activeFilter === 'all' 
//     ? portfolio 
//     : portfolio.filter(project => project.tags.includes(activeFilter));
    

//   return (
//     <section id="portfolio" className="py-20 bg-gray-50 dark:bg-gray-900">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
//             My Projects
//           </h2>
//           <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
//             Here are some of my recent work. Hover over each project for details.
//           </p>
//         </div>

//         {/* Filter Buttons */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           {allTags.map(tag => (
//             <button
//               key={tag}
//               onClick={() => setActiveFilter(tag)}
//               className={`px-4 py-2 rounded-full transition-all duration-300 ${
//                 activeFilter === tag
//                   ? 'bg-blue-600 text-white'
//                   : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
//               }`}
//             >
//               {tag.charAt(0).toUpperCase() + tag.slice(1)}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {filteredProjects.map(portfolio => (
//             <ProjectCard key={portfolio.id} portfolio={portfolio} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // Project Card Component
// const ProjectCard = ({ project }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const ProjectCard = ({ project }) => {
//   if (!project) return null; // or a loading placeholder
//   // ... rest of component
// };

//   return (
//     <div
//       className="relative group overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 transition-all duration-500 hover:shadow-2xl"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {/* Project Image */}
//       <div className="relative h-64 overflow-hidden">
//         <div
//           className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 transition-opacity duration-500 ${
//             isHovered ? 'opacity-100' : 'opacity-0'
//           }`}
//         />
//         <img
//           src={portfolio?.image}
//           alt={portfolio?.title}
//           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//         />
        
//         {/* Tags */}
//         <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
//   {project?.tags?.slice(0, 2)?.map(tag => (
//     <span
//       key={tag}
//       className="px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full"
//     >
//       {tag}
//     </span>
//   ))}
// </div>
//       </div>

//       {/* Project Info (Always visible) */}
//       <div className="p-6">
//         <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
//           {portfolio?.title}
//         </h3>
//         <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
//           {portfolio?.description}
//         </p>
        
//         {/* Action Buttons */}
//         <div className="flex items-center justify-between">
//           <a
//             href={portfolio?.liveUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-2 text-blue-600 hover:text-blue-700 dark:text-blue-400 font-medium transition-colors"
//           >
//             <ExternalLink size={19} />
//             View Live
//           </a>
//           <a
//             href={portfolio?.githubUrl}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
//             title="View Code"
//           >
//             <Github size={15} />
//           </a>
//         </div>
//       </div>

//       {/* Hover Overlay with Detailed Info */}
//       <div
//         className={`absolute inset-0 bg-gradient-to-br from-blue-900/95 to-purple-900/95 p-8 text-white transition-all duration-500 flex flex-col justify-end ${
//           isHovered
//             ? 'opacity-100 translate-y-0'
//             : 'opacity-0 translate-y-full'
//         }`}
//       >
//         <div className="transform transition-transform duration-500 delay-200">
//           <h3 className="text-2xl font-bold mb-4">{portfolio?.title}</h3>
//           <p className="mb-6 text-gray-200">{portfolio?.longDescription}</p>
          
//           {/* Features List */}
//           <div className="mb-6">
//             <h4 className="font-semibold mb-2">Key Features:</h4>
//             <ul className="grid grid-cols-2 gap-2">
//               {portfolio?.features?.map(feature => (
//   <li key={feature} className="flex items-center">
//     <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
//     <span className="text-sm">{feature}</span>
//   </li>
// ))}
//             </ul>
//           </div>

//           {/* Technologies */}
//           <div className="mb-8">
//             <h4 className="font-semibold mb-2">Technologies:</h4>
//             <div className="flex flex-wrap gap-2">
//               {portfolio?.technologies?.map(tech => (
//                 <span
//                   key={tech}
//                   className="px-3 py-1 bg-white/20 rounded-full text-sm"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-4">
//             <a
//               href={portfolio?.liveUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex-1 bg-white text-blue-900 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-all hover:scale-105"
//             >
//               <Eye size={20} />
//               <button className='cursor-pointer'>View Project</button>
//             </a>
//             <a
//               href={portfolio?.githubUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center justify-center p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all hover:scale-105"
//               title="View Source Code"
//             >
//               <Github size={20} className='cursor-pointer' />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

