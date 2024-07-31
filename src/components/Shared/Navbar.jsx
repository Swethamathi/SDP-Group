import React from 'react';
import { NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';

const Navbar = () => {
  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "Login", path: "/login" },
    { title: "What We Do?", path: "/aboutus" },
    { title: "Our Products", path: "/products" }
  ];

  return (
    <div className="fixed top-0 left-0 w-full h-[13vh] flex flex-row justify-center items-center shadow-lg bg-green z-50 backdrop-blur-lg bg-opacity-30 border-b border-white/10 rounded-xl">
      <div className='flex flex-row justify-center items-center h-full w-[95%]'>
        <div className="w-1/2 h-half flex items-start justify-start pt-[5vh]">
          <img
            src="https://ik.imagekit.io/SIBHI/Imagica/reed.png"
            alt="Imagica logo"
            className="object-contain w-[450px] h-[auto]"
          />
        </div>
        
        <div className='w-1/2 h-full font-thin flex flex-row justify-end items-center gap-8'>
          <ul className='flex flex-row gap-8'>
            {NavLinks.map((link, index) => (
              <li key={index} className='list-none'>
                <NavLink 
                  to={link.path} 
                  className={({ isActive }) => 
                    `hover:text-primary ${isActive ? 'text-primary font-bold' : ''}`}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <a 
            href="https://www.cry.org/donate-to-children-ngo-india" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            Donate
          </a>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
