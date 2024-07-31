import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Power, BookOpenText, Podcast } from 'lucide-react';


const AdminLeftbar = () => {
const Move=useNavigate();
const handleHome=()=>{
    Move('/');
}

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        },
        {
            title: 'Stories',
            link: '/admin/stories',
            icon: BookOpenText
        },
        {
            title: 'Podcasts',
            link: '/admin/podcasts',
            icon: Podcast
        }
    ];

    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
             <div id="logo" className="flex items-center cursor-pointer" onClick={handleHome}>
        <img
          src="https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/FavIcon.png?updatedAt=1722142981113"
          alt="Logo"
          className="w-12 h-12 items-start top-0 z-0-0 justify-start"
        />
      </div>
            <div className='h-[90%] w-full flex flex-col justify-start items-center gap-0'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='p-5  font-bold mt-1 w-full'>
                            <span className='flex flex-row items-center justify-start h-full w-full gap-2'>
                                {React.createElement(data.icon, { size: 20 })}
                                {data.title}
                            </span>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    );
}

export default AdminLeftbar;
