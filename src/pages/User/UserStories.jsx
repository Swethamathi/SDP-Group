import React, { useState } from "react";

const InterviewCard = ({ name, title, image, additionalInfo }) => (
  <div className="relative rounded-lg shadow-lg overflow-hidden group">
    <img src={image} alt={name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-600">{title}</p>
    </div>
    {/* Overlay that appears on hover */}
    <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
      <p className="text-white text-center px-4">{additionalInfo}</p>
    </div>
  </div>
);

const interviews = [
  {
    name: 'Little Red Riding Hood',
    title: 'Little Red Riding Hood is a European fairy tale about a young girl and a sly wolf.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Little%20Red%20Riding%20Hood.webp',
    additionalInfo: 'A classic tale about courage and cleverness in the face of danger.',
  },
  {
    name: 'Beauty and the Beast',
    title: 'Originating in France, this is the story of Belle, a beautiful peasant girl.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Beauty%20and%20the%20Beast.jpg',
    additionalInfo: 'A beautiful story about love and understanding beyond appearances.',
  },
  {
    name: 'The Frog Prince',
    title: 'The Frog Prince; or, Iron Henry" is a German fairy tale.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/The%20Frog%20Prince.jpg?updatedAt=1722176812593',
    additionalInfo: 'A story of transformation and keeping promises.',
  },
  {
    name: 'Cinderella',
    title: '"Cinderella", or "The Little Glass Slipper", is a folk tale with thousands of variants.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Cinderella.jpeg',
    additionalInfo: 'A timeless tale of kindness and unexpected fortunes.',
  },
  {
    name: 'Snow White',
    title: '"Snow White" is a German fairy tale, first written down in the early 19th century.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Snow%20White.webp',
    additionalInfo: 'A tale of envy and innocence with a magical twist.',
  },
  {
    name: 'Jack and the Beanstalk',
    title: 'Jack and the Beanstalk" is an English fairy tale.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Jack%20and%20the%20Beanstalk.jpg',
    additionalInfo: 'A daring adventure of bravery and cleverness.',
  },
  {
    name: 'Hansel and Gretel',
    title: 'A German fairy tale about two siblings who encounter a witch in the woods.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Haensel_und_Gretel-2.jpg',
    additionalInfo: 'A story of wit and survival against dark forces.',
  },
  {
    name: 'The Three Little Pigs',
    title: 'An English fairy tale about three pigs and a wolf who tries to blow their houses down.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/The-Three-Little-Pigs.webp',
    additionalInfo: 'A lesson in hard work and perseverance.',
  },
  {
    name: 'Rapunzel',
    title: 'A German fairy tale about a young girl with long golden hair trapped in a tower.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/432072.jpg',
    additionalInfo: 'A tale of rescue and love overcoming obstacles.',
  },
  {
    name: 'The Little Mermaid',
    title: 'A Danish fairy tale about a mermaid who dreams of becoming human.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/wp3151972.webp',
    additionalInfo: 'A story of sacrifice and yearning for a different life.',
  },
  {
    name: 'Sleeping Beauty',
    title: 'A classic fairy tale about a princess who falls into a deep sleep.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/wp2795999.jpg',
    additionalInfo: 'A tale of magic, curses, and true love’s kiss.',
  },
  {
    name: 'Rumpelstiltskin',
    title: 'A German fairy tale about a mysterious dwarf who helps a miller’s daughter spin straw into gold.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/e13e83b3d8f7861e51d2947d8f3bbb88.jpg',
    additionalInfo: 'A story about cleverness and the power of names.',
  },
];

const UserStories = () => {
  const [visibleStories, setVisibleStories] = useState(5);

  const handleLoadMore = () => {
    setVisibleStories(interviews.length);
  };

  return (
    <>
      <section
        id="client-section"
        className="py-8 relative"
        style={{ backgroundImage: "url('../image/background2.jpg')" }}
      >
        <hr />
        <br />
        <h1 className="text-5xl font-bold text-center mb-12">Stories</h1>
        <div className="container mx-auto p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {interviews.slice(0, visibleStories).map((interview, index) => (
              <InterviewCard
                key={index}
                name={interview.name}
                title={interview.title}
                image={interview.image}
                additionalInfo={interview.additionalInfo}
              />
            ))}
          </div>
          {visibleStories < interviews.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleLoadMore}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Load more stories
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default UserStories;
