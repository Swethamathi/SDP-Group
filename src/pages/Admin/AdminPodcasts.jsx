import React, { useState } from 'react';

const UserPodcasts = () => {
  const [showAll, setShowAll] = useState(false);

  const podcasts = [
    {
      id: 1,
      title: 'Stories Podcast',
      description: 'On the Stories Podcast, we perform a new story for your children every week.',
      video: 'https://path/to/random-video-1.mp4',
    },
    {
      id: 2,
      title: 'Circle Round',
      description: "Created and produced by parents of young children, WBUR's Circle Round adapts carefully-selected folktales",
      video: 'https://path/to/random-video-2.mp4',
    },
    {
      id: 3,
      title: 'Story Pirates',
      description: 'The award-winning Story Pirates Podcast takes stories written by kids and turns them into sketch comedy and songs.',
      video: 'https://path/to/random-video-3.mp4',
    },
    {
      id: 4,
      title: "Aaron's World",
      description: "Aaron's World is a fun and imaginative science-themed audio drama for kids.",
      video: 'https://path/to/random-video-4.mp4',
    },
  ];

  const morePodcasts = [
    {
      id: 5,
      title: 'Unspookable',
      description: 'Unspookable is a family-friendly look at the histories and mysteries behind your favorite scary stories, myths, and urban legends.',
      video: 'https://path/to/random-video-5.mp4',
    },
    {
      id: 6,
      title: 'Cultureverse',
      description: 'CULTUREVERSE is an immersive audio drama that celebrates our collective cultural past.',
      video: 'https://path/to/random-video-6.mp4',
    },
    {
      id: 7,
      title: 'Timestorm',
      description: 'The Ventura twins are yanked into another dimension where they meet a distant cousin who gives them an extraordinary mission.',
      video: 'https://path/to/random-video-7.mp4',
    },
    {
      id: 8,
      title: 'Girl Tales',
      description: 'Girl Tales is a podcast featuring reimagined fairytales. Damsels in distress? Princesses in need of protection? You won’t find those here.',
      video: 'https://path/to/random-video-8.mp4',
    },
  ];

  return (
    <>
      <br></br>
      <hr />
      <br></br>
      <h1 className="text-5xl font-bold text-center mb-4">Podcasts</h1>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold">From Our Mic to Your Ears :)</h2>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
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
                <video
                  src={podcast.video}
                  className="rounded-lg mb-4 transition-transform transform hover:scale-105"
                  autoPlay
                  loop
                  muted
                  playsInline
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
              <h3 className="text-xl font-bold text-white mb-2">{podcast.title}</h3>
              <p className="text-white">{podcast.description}</p>
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
                  <video
                    src={podcast.video}
                    className="rounded-lg mb-4 transition-transform transform hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
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
                <h3 className="text-xl font-bold text-white mb-2">{podcast.title}</h3>
                <p className="text-white">{podcast.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UserPodcasts;
