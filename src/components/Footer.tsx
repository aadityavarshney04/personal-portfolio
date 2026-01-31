
import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black-900 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">
              Aaditya<span className="text-amber-400">.</span>
            </h3>
            <p className="text-gray-400 mt-2">
              Computer Science Student & Developer
            </p>
          </div>
          
          <div className="flex space-x-8">
            <a 
              href="https://github.com/Aadi-Varshney" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/aaditya-varshney-4043b6326/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://leetcode.com/u/Adrenaline_Aadi/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
            >
              <Code className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aaditya Varshney. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
