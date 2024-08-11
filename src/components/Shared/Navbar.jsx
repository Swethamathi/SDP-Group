import React from 'react';
import { ModeToggle } from '../mode-toggle';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const NavLinks = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Login',
      path: '/login',
    },
    {
      title: 'Register',
      path: '/register',
    },
  ];

  return (
    <div className="flex items-center justify-between p-3  bg-opacity-50">
      <div
        id="logo"
        className="flex items-center cursor-pointer"
        onClick={handleHome}
      >
        <img
          src="https://ik.imagekit.io/y0qqjzghp/Story.jpeg?updatedAt=1722669462566"
          alt="Logo"
          className="w-12 h-auto"
        />
        <h2 className="text-xl text-center font-bold">FableMindz</h2>
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-4">
          <li className="font-baloo text-lg">
            <a
              href="/"
              className="hover:border-[2px] rounded-lg px-3 py-2 font-bold"
            >
              Home
            </a>
          </li>
          {/* <li className="font-baloo text-lg">
            <a
              href="/#services-container"
              className="hover:border-[2px] rounded-lg px-3 py-2 font-bold"
            >
              Service
            </a>
          </li>
          <li className="font-baloo text-lg">
            <a
              href="/#client-section"
              className="hover:border-[2px] rounded-lg px-3 py-2 font-bold"
            >
              Tales
            </a>
          </li>
          <li className="font-baloo text-lg">
            <a
              href="/#contact"
              className="hover:border-[2px] rounded-lg px-3 py-2 font-bold"
            >
              Feedback
            </a>
          </li> */}
           <li className="font-baloo text-lg">
            <a
              href="/register"
              className="hover:border-[2px] rounded-lg px-3 py-2 font-bold"
            >
            SignUp
            </a>
          </li>
         
          <li className="font-baloo text-lg">
            <a
              href="/login"
              className="hover:border-[2px] rounded-lg px-3 py-2 font-bold"
            >
            Login
            </a>
          </li>
          <li className="items-center outline-none forced-color-adjust-none">
          </li>
        </ul>
            <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
