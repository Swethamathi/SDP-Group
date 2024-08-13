import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => (
  <>
  <hr/>
  <footer className=" py-2 pb-5 items-center justify-center">
    <div className="container mx-auto flex flex-col items-center space-y-4">
        <br></br>
      <div className="flex space-x-6">
        <a href="www.facebook.com" className="text-white hover:text-gray-400 bg-white p-2 rounded-full">
          <Facebook size={24} className="text-black" />
        </a>
        <a href="https://www.instagram.com/" className="text-white hover:text-gray-400 bg-white p-2 rounded-full">
          <Instagram size={24} className="text-black" />
        </a>
        <a href="https://x.com/" className="text-white hover:text-gray-400 bg-white p-2 rounded-full">
          <Twitter size={24} className="text-black" />
        </a>
        <a href="https://www.youtube.com/" className="text-white hover:text-gray-400 bg-white p-2 rounded-full">
          <Youtube size={24} className="text-black" />
        </a>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-sm">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/#services-container" className="hover:text-gray-400">About Us</a>
        <a href="/login" className="hover:text-gray-400">Connect With Us</a>
        <a href="/*" className="hover:text-gray-400">Our Team</a>
      </div>

      <div className="text-sm text-center">
        <p>Copyright &copy; 2024 | Designed by <span className="font-semibold">LittleInn Corporations </span></p>
      </div>
    </div>
  </footer>
  </>
);

export default Footer;
