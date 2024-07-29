
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ModeToggle } from '../mode-toggle'
import { Leaf } from 'lucide-react';
// import SparklesText from "@/components/magicui/sparkles-text";



const Navbar = () => {
  const NavLinks = [
    {
      title: "Home",
      path: "/"
    },
    {
      title: "Register",
      path: "/register"
    },
    {
      title: "Login",
      path: "/login"
    },
    
    {
      title: "Stories",
      path: "/stories"
    }

  ]
  return (
    <div className="w-full h-[8vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
      <div className="w-1/2 h-full text-primary  font-bold flex justify-start items-center text-2xl"> 
 

 <h1>FableMindz</h1>
<Leaf size={45} /></div>
      <div className='w-1/2 h-full font-bold flex flex-row justify-end items-center gap-6'>
        {
          NavLinks.map((links, index) => (
            <li key={index} className='list-none'>
              <NavLink to={links.path}>
                {links.title}
              </NavLink>
            </li>
          ))
        }
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
