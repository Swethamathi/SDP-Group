import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ModeToggle } from '../mode-toggle';


const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Login",
      path: "/login"
    },
    {
      title: "Register",
      path: "/register"
    }
  ];

  return (

    <div className="absolute top-0 left-0 w-full h-[12vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className='flex flex-row justify-center items-center h-full w-[95%]'>

        <div className="w-1/2 h-half gap-0 flex items-start justify-start pt-[5vh]">
          <img
            src="https://ik.imagekit.io/SIBHI/Imagica/reed.png"
            alt="Imagica"
            className="object-contain"
            style={{ width: '450px', height: '800px' }}
          />
        </div>
        
        <div className='w-2/4 h-full font-bold flex flex-row justify-end items-center gap-8'>
          <ul className='flex flex-row gap-8'>
            {
              NavLinks.map((links, index) => (
                <li key={index} className='list-none'>
                  <NavLink to={links.path} className="hover:text-primary">
                    {links.title}
                  </NavLink>
                </li>
              ))
            }
          </ul>
          <ModeToggle />
        </div>

      </div>
    </div>
  );
}

export default Navbar;