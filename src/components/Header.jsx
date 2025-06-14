//import React from 'react'
import { assets } from "../assets/assets"; // Correct spelling and path
import Navbar from "./Navbar";
import { motion } from "motion/react"
//import { useState } from "react";

const Header = () => {

   

  return (
    <div id="Home"
    className="min-h-screen bg-cover bg-center flex items-center justify-center w-full overflow-hidden"
    style={{ backgroundImage: `url(${assets.header_img})` }}
  >
    <Navbar />
 
  
      <motion.div 
      
      whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: false, amount: 0.5 }}
      
      className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 ">
          Expore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16 ">
          <a className="border border-white px-8 py-3 rounded " href="#Project">
            Project
          </a>
          <a
            className="bg-blue-500 border-white px-8 py-3 rounded "
            href="#ContactUs"
          >
            Contact Us
          </a>
        </div>

       
      </motion.div>
      




    </div>
  );
};

export default Header;
