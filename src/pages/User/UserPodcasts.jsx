import React, { useState, useRef } from 'react';
import TypingAnimation from "@/components/magicui/typing-animation";

const UserPodcasts = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentPodcast, setCurrentPodcast] = useState(null);
  const audioRef = useRef(null);

  const podcasts = [
    {
      id: 1,
      title: 'Stories Podcast',
      description: 'On the Stories Podcast, we perform a new story for your children every week.',
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/CAL-animation-share.gif',
    },
    {
      id: 2,
      title: 'Circle Round',
      description: "Created and produced by parents of young children, WBUR's Circle Round adapts carefully-selected folktales",
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/podcast-radio.gif',
    },
    {
      id: 3,
      title: 'Story Pirates',
      description: 'The award-winning Story Pirates Podcast takes stories written by kids and turns them into sketch comedy and songs.',
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/1c25a560-024a-4cc3-8676-f8582ed8868e_480x270.gif',
    },
    {
      id: 4,
      title: "Aaron's World",
      description: "Aaron's World is a fun and imaginative science-themed audio drama for kids.",
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/a-matter-of-degrees-logo.gif',
    },
  ];

  const morePodcasts = [
    {
      id: 5,
      title: 'Unspookable',
      description: 'Unspookable is a family-friendly look at the histories and mysteries behind your favorite scary stories, myths, and urban legends.',
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/giphy.gif',
    },
    {
      id: 6,
      title: 'Cultureverse',
      description: 'CULTUREVERSE is an immersive audio drama that celebrates our collective cultural past.',
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/2020-YearinReview-BestMusic.gif',
    },
    {
      id: 7,
      title: 'Timestorm',
      description: 'The Ventura twins are yanked into another dimension where they meet a distant cousin who gives them an extraordinary mission.',
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/panda500-original.webp',
    },
    {
      id: 8,
      title: 'Girl Tales',
      description: 'Girl Tales is a podcast featuring reimagined fairytales. Damsels in distress? Princesses in need of protection? You won’t find those here.',
      video: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Podcasts/2019-Larson-Best-Podcast.gif',
    },
  ];

  const handlePlayClick = (podcast) => {
    setCurrentPodcast(podcast);
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  const handleClose = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentPodcast(null);
  };

  return (
    <>
      <br />
      <hr />
      <br />
      <h1 className="text-5xl font-bold text-center mb-4">Podcasts</h1>
      <div className="p-8">
        <div className="flex justify-between items-center mb-8">
          <TypingAnimation
            className="text-4xl font-bold text-black dark:text-white"
            text="From Our Mic To Your Ears :"
          />
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
                <img
                  src={podcast.video}
                  className="rounded-lg mb-4 transition-transform transform hover:scale-105"
                  alt={podcast.title}
                />
                <button
                  className="absolute top-2 bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                  onClick={() => handlePlayClick(podcast)}
                >
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
                  <img
                    src={podcast.video}
                    className="rounded-lg mb-4 transition-transform transform hover:scale-105"
                    alt={podcast.title}
                  />
                  <button
                    className="absolute top-2 bottom-4 right-4 bg-green-500 w-12 h-12 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                    onClick={() => handlePlayClick(podcast)}
                  >
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
        {currentPodcast && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white rounded-lg p-4 w-11/12 md:w-3/4 lg:w-1/2 shadow-lg">
            <h3 className="text-xl font-bold mb-4">{currentPodcast.title}</h3>
            <div className="flex items-center">
              <audio ref={audioRef} className="flex-grow">
                <source src={currentPodcast.audio} type="audio/mp3" />
                Your browser does not support the audio element.
              </audio>
              <div className="flex items-center space-x-4">
                <button onClick={handlePlayPause}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 9v6l5-3-5-3z"
                    />
                  </svg>
                </button>
                <button onClick={handleClose}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4l16 16M4 20L20 4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserPodcasts;
