import React, { useState, useEffect } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Handle body overflow when the mobile menu is active
  useEffect(() => {
    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMobileMenu]);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      {/* Navbar */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent">
        {/* Logo */}
        <img src={assets.logo} alt="Logo" className="h-10 w-auto px-4" />

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex gap-7 text-white font-medium">
          {['Home', 'About', 'Projects', 'Testimonials'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} className="cursor-pointer hover:text-gray-400">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign-Up Button */}
        <button className="hidden md:block bg-white px-8 py-2 rounded-full shadow-md hover:bg-gray-100">
          Sign up
        </button>

        {/* Mobile Menu Toggle */}
        <img
          onClick={() => setShowMobileMenu(true)}
          src={assets.menu_icon}
          className="md:hidden w-7 cursor-pointer"
          alt="Menu"
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${
          showMobileMenu ? 'translate-x-0' : 'translate-x-full'
        } z-20`}
      >
        <div className="flex justify-end p-6">
          <img
            onClick={() => setShowMobileMenu(false)}
            src={assets.cross_icon}
            className="w-6 cursor-pointer"
            alt="Close Menu"
          />
        </div>

        <ul className="flex flex-col items-center space-y-4">
          {['Home', 'About', 'Projects', 'Testimonials'].map((item) => (
            <li key={item}>
              <a
                onClick={() => setShowMobileMenu(false)}
                href={`#${item}`}
                className="px-4 py-2 rounded-full inline-block hover:bg-gray-200"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
