import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Power, BookOpenCheck, Podcast, SubscriptIcon } from 'lucide-react';

const UserLeftbar = () => {
const Move=useNavigate();
const handleLogout=()=>{
    Move('/');
}
const handleHome=()=>{
    Move('/');
}

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/user/dashboard',
            icon: LayoutDashboard
        },
        {
            title: 'Stories',
            link: '/user/stories',
            icon: BookOpenCheck
        },
        {
            title: 'Podcasts',
            link: '/user/podcasts',
            icon: Podcast
        },
        {
            title: 'Subsrciption',
            link: '/user/subscription',
            icon: SubscriptIcon
        },
    ];

    return (
        <div className='h-screen w-1/6 flex justify-center items-center flex-col shadow-sm shadow-primary pt-10'>
             <div id="logo" className="flex items-center justify-start cursor-pointer" onClick={handleHome}>
             <img
          src="https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/2.png?updatedAt=1722589914943"
          alt="Logo"
          className="w-12 h-auto"
        />
        <h2 className="text-xl text-center font-bold">LittleInn</h2>
      </div>
            <div className='h-full w-full flex flex-col justify-start items-center gap-2'>
                {
                    AdminLinks.map((data, index) => (
                        <NavLink key={index} to={data.link} className='px-9 py-2 text-1xl font-bold text-center mb-8 mt-2 w-full'>
                            <span className='flex flex-row items-center  justify-start h-full w-full gap-2'>
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

export default UserLeftbar;
