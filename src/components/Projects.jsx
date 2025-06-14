import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from "framer-motion"
const Projects = () => {
  // State to manage the current index of the slider
  const [currentIndex, setCurrentIndex] = useState(0);
  // State to determine how many cards to show based on screen size
  const [cardsToShow, setCardsToShow] = useState(1);

  // Effect to update the number of visible cards based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth > 1024) {
        setCardsToShow(projectsData.length); // Show all cards on large screens
      } else {
        setCardsToShow(1); // Show one card on smaller screens
      }
    };

    updateCardsToShow(); // Call on initial render
    window.addEventListener('resize', updateCardsToShow); // Update on window resize

    return () => {
      window.removeEventListener('resize', updateCardsToShow); // Clean up event listener
    };
  }, []);

  // Handler for moving to the next project
  const nextProject = () => {
    if (projectsData.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    }
  };

  // Handler for moving to the previous project
  const prevProject = () => {
    if (projectsData.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    }
  };

  return (
    <motion.div id='Projects' className="container mx-auto py-10 lg:px-10 w-full overflow-hidden"
    
    initial={{  opacity: 0, x: -200 }}
    transition={{ duration: 1.5 }}
    whileInView={{  opacity: 1 ,x: 0 }}
    viewport={{ once: false, amount: 0.5 }}
    
    
    
    >
        



      {/* Heading */}
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Project
        <span className="underline underline-offset-4 decoration-1 font-light"> Completed</span>
      </h1>

      {/* Subheading */}
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prevProject}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
          disabled={projectsData.length === 0}
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={nextProject}
          className="p-3 bg-gray-200 rounded"
          aria-label="Next Project"
          disabled={projectsData.length === 0}
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider Container */}
      {projectsData.length > 0 ? (
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
          >
            {/* Render each project card */}
            {projectsData.map((project, index) => (
              <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
                {/* Project Image */}
                <img src={project.image} alt={project.title} className="w-full h-auto mb-14" />

                {/* Project Details */}
                <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">{project.title}</h2>
                    <p className="text-gray-500 text-sm">
                      {project.price} | {project.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No projects to display.</p>
      )}
    </motion.div>
  );
};

export default Projects;
