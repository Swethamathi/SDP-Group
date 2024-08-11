import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, BookOpenText, Podcast, ActivityIcon } from 'lucide-react';
import { useTheme } from "@/components/theme-provider";

const AdminLeftbar = () => {
    const navigate = useNavigate();
    const { theme } = useTheme(); // Use the theme context

    const handleHome = () => {
        navigate('/');
    };

    const AdminLinks = [
        {
            title: 'Dashboard',
            link: '/admin/dashboard',
            icon: LayoutDashboard,
        },
        {
            title: 'Manage Users',
            link: '/admin/users',
            icon: Users,
        },
        {
            title: 'Stories',
            link: '/admin/stories',
            icon: BookOpenText,
        },
        {
            title: 'Podcasts',
            link: '/admin/podcasts',
            icon: Podcast,
        },
        {
            title: 'Activities',
            link: '/admin/activities',
            icon: ActivityIcon,
        },
    ];

    const activeLinkStyle = theme === 'dark' ? 'bg-primary-500 text-white shadow-md' : 'bg-primary-200 text-gray-800 shadow-md';
    const hoverLinkStyle = theme === 'dark' ? 'hover:bg-primary-700 hover:text-blue-300' : 'hover:bg-primary-100 hover:text-blue-600';
    const lineColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';

    return (
        <div className="relative flex h-screen w-64 flex-col items-center bg-opacity-70 p-6 shadow-lg backdrop-blur-sm transition-all duration-300">
            <div
                id="logo"
                className="flex w-full items-center justify-center space-x-3 py-5 cursor-pointer"
                onClick={handleHome}
            >
                <img
                    src="https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/2.png?updatedAt=1722589914943"
                    alt="Logo"
                    className="w-12 h-auto"
                />
                <h2 className="text-2xl font-bold tracking-wide">LittleInn</h2>
            </div>
            <hr className={`w-full ${lineColor}`} />
            <div className="mt-8 flex flex-col items-start w-full space-y-4 flex-grow">
                {AdminLinks.map((data, index) => (
                    <NavLink
                        key={index}
                        to={data.link}
                        className={({ isActive }) =>
                            `flex w-full items-center space-x-4 px-4 py-3 rounded-lg text-lg font-semibold transition-colors duration-200 ${
                                isActive
                                    ? activeLinkStyle
                                    : hoverLinkStyle
                            }`
                        }
                    >
                        <data.icon size={24} className="flex-shrink-0" />
                        <span>{data.title}</span>
                    </NavLink>
                ))}
            </div>
            <div className={`absolute right-0 top-0 h-full border-r-2 ${lineColor}`}></div>
        </div>
    );
};

export default AdminLeftbar;
