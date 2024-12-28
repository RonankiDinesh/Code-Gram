import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-6 text-center">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* About */}
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">CodeGram</h1>
          <p className="text-sm text-gray-400">Code,Learn,Share</p>
        </div>
        {/* Navigation */}
        <div className="flex flex-wrap space-x-5 mb-4 md:mb-0">
            <Link to = "/home" className="text-gray-400 hover:text-white">Home</Link>
            <Link to = "/tutorials" className="text-gray-400 hover:text-white">Tutorial</Link>
            <Link to = "/opensource" className="text-gray-400 hover:text-white">OpenSource</Link>
            <Link to = "/tutorials" className="text-gray-400 hover:text-white">Contact</Link>
        </div>
        {/* Social Media */}
        <div className="flex space-x-4 mb-4">
             <Link to = "https://github.com">
                    <FaGithub className="text-xl text-gray-400 hover:text-white" />
            </Link>
            <Link to = "https://x.com">
                    <FaTwitter className="text-xl text-gray-400 hover:text-white" />
            </Link>
            <Link to = "https://linkedin.com">      
                    <FaLinkedin className="text-xl text-gray-400 hover:text-white" />
            </Link>
        </div>
        {/* Copyright */}
        <div className="justify-center">
        © 2024 CodeGram. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
