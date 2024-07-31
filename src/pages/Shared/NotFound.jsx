import Particles from '@/components/magicui/particles'
import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        <Particles />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Page Not Found!
        </span>
        <Link to='/' className='text-primary font-bold mt-4'>
          Go to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
