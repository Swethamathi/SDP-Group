import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlurIn from "@/components/magicui/blur-in";
import PulsatingButton from '@/components/ui/pulsating-button';
import { VelocityScroll } from '@/components/magicui/scroll-based-velocity';

const Home = () => {
  const navigate = useNavigate();

  const handleProductRedirect = () => {
    navigate('/products');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-gray-100 dark:bg-gray-900">
      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center p-4">
        <VelocityScroll
          text="stories poems morals images rhymes kids school colours"
          default_velocity={1/2}
          className="font-display text-center text-3xl font-extralight tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-6xl md:leading-[5rem] opacity-20"
        />
        <BlurIn
          word="Influence your kids with morals🪄🔮"
          className="text-lg font-extralight text-black dark:text-white mb-6 justify-center items-center"
        />
        <PulsatingButton
          className="bg-gradient-to-r from-green-700 to-violet-600"
          onClick={handleProductRedirect}
        >
          <p>Join affiliate program ᐅᐅ</p>
        </PulsatingButton>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p>&copy; 2024 Imagica. All rights reserved.</p>
          <div className="space-x-4">
            <a href="#" className="text-white">Privacy Policy</a>
            <a href="#" className="text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
