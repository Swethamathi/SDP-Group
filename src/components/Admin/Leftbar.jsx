import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BringToFront, Users, ChartBarIcon, ChartAreaIcon, Power } from 'lucide-react';
import { Button } from '../ui/button';

const Leftbar = () => {
    const [expanded, setExpanded] = useState(false);

    const handleMouseEnter = () => setExpanded(true);
    const handleMouseLeave = () => setExpanded(false);

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: BringToFront
        },
        {
            title: 'Users',
            link: '/admin/users',
            icon: Users
        },
        {
            title: 'Reports & charts',
            link: '/admin/reports',
            icon: ChartAreaIcon
        },
        {
            title: 'Charts',
            link: '/admin/charts',
            icon: ChartBarIcon
        }
    ];

    return (
        <div
            className={`h-screen flex flex-col shadow-sm shadow-primary pt-9 transition-all duration-300 ${expanded ? 'w-1/4' : 'w-1/6'}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full flex items-center justify-center">
                <img
                    src="https://ik.imagekit.io/SIBHI/Imagica/reed.png"
                    alt="Imagica"
                    className="object-contain"
                    style={{ width: expanded ? '200px' : '100px', transition: 'width 0.3s' }}
                />
            </div>
            
            <div className='flex flex-col justify-start items-center gap-0 mt-4 overflow-y-auto'>
                {AdminLinks.map((data, index) => (
                    <NavLink key={index} to={data.link} className={`p-5 font-bold mt-2 w-full transition-all duration-300 ${expanded ? 'bg-primary/10 hover:bg-primary/20' : 'bg-primary/5 hover:bg-primary/10'}`}>
                        <span className='flex items-center gap-2'>
                            {React.createElement(data.icon, { size: 20 })}
                            <span className={`${expanded ? 'block' : 'hidden'} transition-opacity duration-300`}>{data.title}</span>
                        </span>
                    </NavLink>
                ))}
            </div>
            
            <div className='flex flex-col justify-center items-center gap-4 mt-auto mb-4'>
                <Button className='p-5 bg-red-500/5 hover:bg-red-500/10 w-full'>
                    <span className='flex items-center gap-3 text-red-500'>
                        <Power size={20} />
                        <span className={`${expanded ? 'block' : 'hidden'} transition-opacity duration-300`}>Logout</span>
                    </span>
                </Button>
            </div>
        </div>
    );
};

export default Leftbar;
