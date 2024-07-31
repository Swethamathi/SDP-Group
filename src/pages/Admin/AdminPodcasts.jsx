import React, { useState } from 'react';

const AdminPodcasts = () => {
  const [showAll, setShowAll] = useState(false);

  const podcasts = [
    {
      id: 1,
      title: 'Stories Podcast',
      description: 'On the Stories Podcast, we perform a new story for your children every week.',
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/download.png',
    },
    {
      id: 2,
      title: 'Circle Round',
      description: "Created and produced by parents of young children, WBUR's Circle Round adapts carefully-selected folktales",
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/WBUR_Album_Art_3000px_CircleRound-1000x1000.jpg',
    },
    {
      id: 3,
      title: 'Story Pirates',
      description: 'The award-winning Story Pirates Podcast takes stories written by kids and turns them into sketch comedy and songs.',
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/download.jpg',
    },
    {
      id: 4,
      title: "Aaron's World",
      description: "Aaron's World is a fun and imaginative science-themed audio drama for kids.",
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/download(1).jpg',
    },
  ];

  const morePodcasts = [
    {
      id: 5,
      title: 'Unspookable',
      description: 'Unspookable is a family friendly look at the histories and mysteries behind your favorite scary stories, myths and urban legends.',
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/download(1).png',
    },
    {
      id: 6,
      title: 'Cultureverse',
      description: 'CULTUREVERSE is an immersive audio drama that celebrates our collective cultural past.',
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/download(2).jpg',
    },
    {
      id: 7,
      title: 'Timestorm',
      description: 'The Ventura twins are yanked into another dimension where they meet a distant cousin who gives them an extraordinary mission.',
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/images.png',
    },
    {
      id: 8,
      title: 'Girl Tales',
      description: 'Girl Tales is a podcast featuring reimagined fairytales. Damsels in distress? Princesses in need of protection? You won’t find those here.',
      image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/download(3).jpg',
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black text-white p-8">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold">From Our Mic to Your Ears :)</h2>
        <button
          className="text-gray-400 hover:text-white transition duration-300"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show less' : 'Show all'}
        </button>
      </div>
      <div className="flex space-x-6 overflow-x-auto mb-8">
        {podcasts.map((podcast) => (
          <div
            key={podcast.id}
            className="bg-gray-800 rounded-lg p-4 w-64 shadow-lg hover:bg-gray-700 transition-transform transform hover:-translate-y-2"
          >
            <div className="relative">
              <img
                src={podcast.image}
                alt={podcast.title}
                className="rounded-lg mb-4 transition-transform transform hover:scale-105"
              />
              <button className="absolute top-2 bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-6.426 3.686A1 1 0 017 13.686V6.314a1 1 0 011.326-.945l6.426 3.686a1 1 0 010 1.714z"
                  />
                </svg>
              </button>
            </div>
            <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
            <p className="text-gray-400">{podcast.description}</p>
          </div>
        ))}
      </div>
      {showAll && (
        <div className="flex space-x-6 overflow-x-auto">
          {morePodcasts.map((podcast) => (
            <div
              key={podcast.id}
              className="bg-gray-800 rounded-lg p-4 w-64 shadow-lg hover:bg-gray-700 transition-transform transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="rounded-lg mb-4 transition-transform transform hover:scale-105"
                />
                <button className="absolute top-2 bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-auto text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-6.426 3.686A1 1 0 017 13.686V6.314a1 1 0 011.326-.945l6.426 3.686a1 1 0 010 1.714z"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-semibold mb-2">{podcast.title}</h3>
              <p className="text-gray-400">{podcast.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminPodcasts;
