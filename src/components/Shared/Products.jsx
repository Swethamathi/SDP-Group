import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { motion } from 'framer-motion';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { useTheme } from 'next-themes'; // Use next-themes or similar for theme management

const Products = () => {
  const { theme } = useTheme();

  const handleReadStoriesClick = () => {
    console.log('Navigate to Read Stories');
  };

  const handleWriteStoriesClick = () => {
    console.log('Navigate to Write Stories');
  };

  const handleEnrollOrgClick = () => {
    console.log('Navigate to Enroll Organization');
  };

  return (
    <div className={`min-h-screen py-10`}>
      <div className={`max-w-screen-lg mx-auto px-4 `}>
        <div className="mb-16 pt-16"> {/* Added padding-top for more space above the carousel */}
          <Carousel 
            showThumbs={false} 
            infiniteLoop 
            useKeyboardArrows 
            autoPlay 
            showArrows={false}
            showStatus={false}
            renderIndicator={(onClickHandler, isSelected) => (
              <div
                onClick={onClickHandler}
                style={{
              
                  borderRadius: '50%',
                  width: '10px',
                  height: '10px',
                  margin: '0 4px',
                  display: 'inline-block',
                  cursor: 'pointer',
                }}
              />
            )}
          >
            <div className="p-4">
              <div className={`rounded-lg shadow-lg p-6 text-center`}>
                <h2 className="text-2xl font-bold mb-4">Read Stories</h2>
                <p className="mb-4">Dive into a world of imagination and adventure with our vast collection of stories.</p>
                <Button
                  onClick={handleReadStoriesClick}
                  className={`w-full bg-gradient-to-r from-blue-400 to-purple-300 text-white rounded hover:from-blue-500 hover:to-purple-400 transition duration-150 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-600 to-purple-500' : ''}`}
                >
                  Start Reading
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className={`rounded-lg shadow-lg p-6 text-center`}>
                <h2 className="text-2xl font-bold mb-4">Write Stories</h2>
                <p className="mb-4">Share your creativity and become an author in our community.</p>
                <Button
                  onClick={handleWriteStoriesClick}
                  className={`w-full bg-gradient-to-r from-green-400 to-teal-300 text-white rounded hover:from-green-500 hover:to-teal-400 transition duration-150 ${theme === 'dark' ? 'bg-gradient-to-r from-green-600 to-teal-500' : ''}`}
                >
                  Start Writing
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className={`rounded-lg shadow-lg p-6 text-center`}>
                <h2 className="text-2xl font-bold mb-4">Enroll Organization</h2>
                <p className="mb-4">Join our educational platform to provide immersive learning experiences.</p>
                <Button
                  onClick={handleEnrollOrgClick}
                  className={`w-full bg-gradient-to-r from-purple-400 to-pink-300 text-white rounded hover:from-purple-500 hover:to-pink-400 transition duration-150 ${theme === 'dark' ? 'bg-gradient-to-r from-purple-600 to-pink-500' : ''}`}
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </Carousel>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img src={`https://picsum.photos/200/150?random=${index}`} alt="Random" className="w-full h-36 object-cover" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
