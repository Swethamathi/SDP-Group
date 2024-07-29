import React, { useState, useEffect } from 'react';

const UserDashboard= () => {
  const [stories, setStories] = useState([]);
  const [selectedStories, setSelectedStories] = useState(new Set());
  const [visibleStoriesCount, setVisibleStoriesCount] = useState(6);
  const [likedStories, setLikedStories] = useState(new Set());

  useEffect(() => {
    const fetchedStories = [
      { id: 1, title: 'Tenali Raman and the Two Thieves', image: 'https://ik.imagekit.io/y0qqjzghp/thenali%20raman.jpeg?updatedAt=1722170650290', description: 'A story about Tenali Raman outwitting two thieves.', language: 'English' },
      { id: 2, title: 'The Clever Barber', image: 'https://ik.imagekit.io/y0qqjzghp/clever.jpg?updatedAt=1722171520961', description: 'A story about Tenali Raman and a clever barber.', language: 'English' },
      { id: 3, title: 'Akbar and Birbal: The Pot of Wisdom', image: 'https://ik.imagekit.io/y0qqjzghp/ab.jpg?updatedAt=1722170933058', description: 'A story about Birbal teaching a lesson of wisdom.', language: 'English' },
      { id: 4, title: 'Birbal Catches the Thief', image: 'https://ik.imagekit.io/y0qqjzghp/tbirbal.jpg?updatedAt=1722171284563', description: 'A story about Birbal using his wit to catch a thief.', language: 'English' },
      { id: 5, title: 'The Merchant and the Foolish Barber', image: 'https://ik.imagekit.io/y0qqjzghp/barb.jpg?updatedAt=1722171925977', description: 'A story about a merchant and a foolish barber.', language: 'English' },
      { id: 6, title: 'The Lion and the Clever Rabbit', image: 'https://ik.imagekit.io/y0qqjzghp/lion.jpeg?updatedAt=1722172038921', description: 'A story about a clever rabbit outsmarting a lion.', language: 'English' },
      { id: 7, title: 'The Foolish Lion and the Clever Rabbit', image: 'https://ik.imagekit.io/y0qqjzghp/rabb.avif?updatedAt=1722172206243', description: 'A story about a clever rabbit who tricks a foolish lion.', language: 'English' },
      { id: 8, title: 'The Jackal and the Drum', image: 'https://ik.imagekit.io/y0qqjzghp/jackal.jpg?updatedAt=1722172288535', description: 'A story about a jackal discovering a drum.', language: 'English' },
      { id: 9, title: 'The Crocodile and the Monkey', image: 'https://ik.imagekit.io/y0qqjzghp/Monkey.jpg?updatedAt=1722172390980', description: 'A story about a monkey outsmarting a crocodile.', language: 'English' },
      { id: 10, title: 'The Four Friends', image: 'https://ik.imagekit.io/y0qqjzghp/four.jpeg?updatedAt=1722172527214', description: 'A story about four animal friends helping each other.', language: 'English' },
      { id: 11, title: 'The Wise Old Man', image: 'https://ik.imagekit.io/y0qqjzghp/old%20man%20(1).jpg?updatedAt=1722173271113', description: 'A story about an old man\'s wisdom helping villagers.', language: 'English' },
      { id: 12, title: 'The Elephant and the Tailor', image: 'https://ik.imagekit.io/y0qqjzghp/tailor.jpg?updatedAt=1722173406159', description: 'A story about an elephant and a tailor.', language: 'English' },
    ];
    setStories(fetchedStories);
  }, []);

  const toggleSelectStory = (id) => {
    setSelectedStories(prevSelectedStories => {
      const newSelectedStories = new Set(prevSelectedStories);
      if (newSelectedStories.has(id)) {
        newSelectedStories.delete(id);
      } else {
        newSelectedStories.add(id);
      }
      return newSelectedStories;
    });
  };

  const toggleLikeStory = (id) => {
    setLikedStories(prevLikedStories => {
      const newLikedStories = new Set(prevLikedStories);
      if (newLikedStories.has(id)) {
        newLikedStories.delete(id);
      } else {
        newLikedStories.add(id);
      }
      return newLikedStories;
    });
  };

  const showMoreStories = () => {
    setVisibleStoriesCount(prevCount => prevCount + 6);
  };

  const showLessStories = () => {
    setVisibleStoriesCount(6);
  };

  const filterStoriesByLanguage = (language) => {
    return stories.filter(story => story.language === language);
  };

  return (
    <div>
      <div className="story-grid-container">
        <StoryGrid 
          stories={filterStoriesByLanguage('English').slice(0, visibleStoriesCount)} 
          selectedStories={selectedStories} 
          toggleSelectStory={toggleSelectStory} 
          toggleLikeStory={toggleLikeStory}
          likedStories={likedStories}
        />
        {visibleStoriesCount < filterStoriesByLanguage('English').length ? (
          <button className="show-more-button" onClick={showMoreStories}>Show More</button>
        ) : (
          <button className="show-more-button" onClick={showLessStories}>Show Less</button>
        )}
      </div>
      <LikedStories 
        stories={{
          English: filterStoriesByLanguage('English').filter(story => likedStories.has(story.id)),
        }}
        toggleLikeStory={toggleLikeStory}
      />
    </div>
  );
};

const StoryCard = ({ title, image, description, isSelected, onSelect, onLike, isLiked }) => {
  return (
    <div className={`story-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      <img src={image} alt={title} />
      <div className="story-content">
        <h3>{title}</h3>
        {isSelected && <p>{description}</p>}
        <button className="read-more-button" onClick={(e) => { e.stopPropagation(); onSelect(); }}>
          {isSelected ? 'Read Less' : 'Read More'}
        </button>
      </div>
      <div className="actions">
        <button 
          className={`like-button ${isLiked ? 'liked' : ''}`} 
          onClick={(e) => { e.stopPropagation(); onLike(); }}
        >
          {isLiked ? '❤️' : '♡'}
        </button>
      </div>
    </div>
  );
};

const StoryGrid = ({ stories, selectedStories, toggleSelectStory, toggleLikeStory, likedStories }) => {
  return (
    <div className="story-grid">
      {stories.map(story => (
        <StoryCard 
          key={story.id}
          title={story.title}
          image={story.image}
          description={story.description}
          isSelected={selectedStories.has(story.id)}
          onSelect={() => toggleSelectStory(story.id)}
          isLiked={likedStories.has(story.id)}
          onLike={() => toggleLikeStory(story.id)}
        />
      ))}
    </div>
  );
};

const LikedStories = ({ stories, toggleLikeStory }) => {
  return (
    <div className="liked-stories">
      <h2>Liked Stories</h2>
      {stories.English.length > 0 && (
        <>
          <h3>English Stories</h3>
          <StoryGrid 
            stories={stories.English}
            selectedStories={new Set()}
            toggleSelectStory={() => {}}
            toggleLikeStory={toggleLikeStory}
            likedStories={new Set(stories.English.map(story => story.id))}
          />
        </>
      )}
      {stories.English.length === 0 && (
        <p>No stories liked yet.</p>
      )}
    </div>
  );
};

export default UserDashboard
