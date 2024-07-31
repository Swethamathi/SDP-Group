import { Facebook, LinkedinIcon, LucideInstagram, Twitter } from 'lucide-react';
import React from 'react';
import { Input } from '../ui/input';

const Footer = () => {
  return (
    <footer className="bg-blue-900 py-8 px-4 text-white backdrop-blur-lg shadow-lg rounded-lg"
      style={{
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background
      }}>
      <div className="border-t border-gray-700 mb-6"></div>
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Company Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-extrabold mb-4">Company</h2>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="#" className="hover:underline transition-all">About Us</a></li>
            <li><a href="#" className="hover:underline transition-all">Careers</a></li>
            <li><a href="#" className="hover:underline transition-all">Press</a></li>
          </ul>
        </div>
        
        {/* Products Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">Products</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline transition-all">Interactive Stories</a></li>
            <li><a href="#" className="hover:underline transition-all">Educational Games</a></li>
            <li><a href="#" className="hover:underline transition-all">Flash Cards</a></li>
            <li><a href="#" className="hover:underline transition-all">Creative Activities</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline transition-all">Blog</a></li>
            <li><a href="#" className="hover:underline transition-all">FAQ</a></li>
            <li><a href="#" className="hover:underline transition-all">Support</a></li>
            <li><a href="#" className="hover:underline transition-all">Contact Us</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex gap-4 mb-4">
            <a href='#' target='_blank' rel='noopener noreferrer' className='h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex justify-center items-center transition-transform transform hover:scale-110'>
              <Facebook className='h-6 w-6' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer' className='h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex justify-center items-center transition-transform transform hover:scale-110'>
              <Twitter className='h-6 w-6' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer' className='h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex justify-center items-center transition-transform transform hover:scale-110'>
              <LucideInstagram className='h-6 w-6' />
            </a>
            <a href='#' target='_blank' rel='noopener noreferrer' className='h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex justify-center items-center transition-transform transform hover:scale-110'>
              <LinkedinIcon className='h-6 w-6' />
            </a>
          </div>
          <a href="#" className="text-sm hover:underline transition-all">Subscribe to our newsletter</a>
          <Input className="mt-2 px-4 py-2 rounded-lg border border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Enter your email" />
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p className="text-sm">&copy; 2024 Imagica. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
