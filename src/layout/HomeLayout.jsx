import Footer from '@/components/Shared/Footer'
import Navbar from '@/components/Shared/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
import Meteors from '@/components/magicui/meteors'
// import GridPattern from '@/components/magicui/animated-grid-pattern'
import RetroGrid from '@/components/magicui/retro-grid'


const HomeLayout = () => {
    return (
        <>
            <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
                <Navbar />
                <Outlet />
               
                <RetroGrid/>
                <Footer />
            </div>
            
        </>
    )
}

export default HomeLayout