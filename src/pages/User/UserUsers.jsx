import React, { useState, useEffect } from 'react';

const UserUsers = () => {
  const [stories, setStories] = useState([]);
  const [selectedStories, setSelectedStories] = useState(new Set());
  const [visibleTamilStoriesCount, setVisibleTamilStoriesCount] = useState(6);
  const [likedStories, setLikedStories] = useState(new Set());

  useEffect(() => {
    const fetchedStories = [
      { id: 13, title: 'தெனாலிராமன் மற்றும் இரண்டு திருடர்கள்', image: 'https://ik.imagekit.io/y0qqjzghp/thenali%20raman.jpeg?updatedAt=1722170650290', description: 'தெனாலிராமன் இரண்டு திருடர்களை முந்திவிட்டார்.', language: 'Tamil' },
      { id: 14, title: 'தெனாலிராமன் மற்றும் கூத்தாடி', image: 'https://ik.imagekit.io/y0qqjzghp/clever.jpg?updatedAt=1722171520961', description: 'தெனாலிராமன் மற்றும் ஒரு கூத்தாடியின் கதை.', language: 'Tamil' },
      { id: 15, title: 'அக்பர் மற்றும் பீர்பால்: புத்திசாலியின் பானை', image: 'https://ik.imagekit.io/y0qqjzghp/ab.jpg?updatedAt=1722170933058', description: 'பீர்பால் புத்திசாலித்தனத்தை கற்றுக் கொடுக்கும் கதை.', language: 'Tamil' },
      { id: 16, title: 'பீர்பால் திருடரைப் பிடிக்கிறார்', image: 'https://ik.imagekit.io/y0qqjzghp/tbirbal.jpg?updatedAt=1722171284563', description: 'பீர்பால் தனது புத்திசாலித்தனத்தை பயன்படுத்தி திருடரைப் பிடிக்கிறார்.', language: 'Tamil' },
      { id: 17, title: 'வியாபாரி மற்றும் முட்டாள் கூத்தாடி', image: 'https://ik.imagekit.io/y0qqjzghp/barb.jpg?updatedAt=1722171925977', description: 'ஒரு வியாபாரி மற்றும் ஒரு முட்டாள் கூத்தாடியின் கதை.', language: 'Tamil' },
      { id: 18, title: 'சிங்கமும் புத்திசாலி முயலும்', image: 'https://ik.imagekit.io/y0qqjzghp/lion.jpeg?updatedAt=1722172038921', description: 'ஒரு புத்திசாலி முயல் சிங்கத்தை முந்திவிட்ட கதை.', language: 'Tamil' },
      { id: 19, title: 'முட்டாள் சிங்கமும் புத்திசாலி முயலும்', image: 'https://ik.imagekit.io/y0qqjzghp/rabb.avif?updatedAt=1722172206243', description: 'ஒரு புத்திசாலி முயல் ஒரு முட்டாள் சிங்கத்தை முந்திவிட்ட கதை.', language: 'Tamil' },
      { id: 20, title: 'நரி மற்றும் பட்டம்', image: 'https://ik.imagekit.io/y0qqjzghp/jackal.jpg?updatedAt=1722172288535', description: 'ஒரு நரி ஒரு பட்டத்தை கண்டுபிடிக்கும் கதை.', language: 'Tamil' },
      { id: 21, title: 'முதலை மற்றும் குரங்கு', image: '', description: 'ஒரு புத்திசாலி குரங்கு முதலைக்கு முந்திவிட்ட கதை.', language: 'Tamil' },
      { id: 22, title: 'நான்கு நண்பர்கள்', image: 'https://ik.imagekit.io/y0qqjzghp/four.jpeg?updatedAt=1722172527214', description: 'நான்கு மிருக நண்பர்கள் ஒருவருக்கொருவர் உதவும் கதை.', language: 'Tamil' },
      { id: 23, title: 'புத்திசாலி முதியவர்', image: 'https://ik.imagekit.io/y0qqjzghp/old%20man%20(1).jpg?updatedAt=1722173271113', description: 'ஒரு முதியவரின் புத்திசாலித்தனம் கிராம மக்கள் உதவும் கதை.', language: 'Tamil' },
      { id: 24, title: 'யானை மற்றும் தையல்காரர்', image: 'https://ik.imagekit.io/y0qqjzghp/tailor.jpg?updatedAt=1722173406159', description: 'ஒரு யானை மற்றும் ஒரு தையல்காரர்.', language: 'Tamil' },
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
    setVisibleTamilStoriesCount(prevCount => prevCount + 6);
  };

  const showLessStories = () => {
    setVisibleTamilStoriesCount(6);
  };

  const filterStoriesByLanguage = (language) => {
    return stories.filter(story => story.language === language);
  };

  return (
    <div style={{ padding: '20px', margin: '0', minHeight: '100vh' }}>
      <>
        <StoryGrid 
          stories={filterStoriesByLanguage('Tamil').slice(0, visibleTamilStoriesCount)} 
          selectedStories={selectedStories} 
          toggleSelectStory={toggleSelectStory} 
          toggleLikeStory={toggleLikeStory}
          likedStories={likedStories}
        />
        {visibleTamilStoriesCount < filterStoriesByLanguage('Tamil').length ? (
          <button className="show-more-button" onClick={showMoreStories}>Show More</button>
        ) : (
          <button className="show-more-button" onClick={showLessStories}>Show Less</button>
        )}
      </>
      <LikedStories 
        stories={filterStoriesByLanguage('Tamil').filter(story => likedStories.has(story.id))}
        toggleLikeStory={toggleLikeStory}
      />
    </div>
  );
};

const StoryCard = ({ title, image, description, isSelected, onSelect, onLike, isLiked }) => {
  return (
    <div className={`story-card ${isSelected ? 'selected' : ''}`} onClick={onSelect}>
      {image && <img src={image} alt={title} />}
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
      {stories.length > 0 ? (
        <>
          <h3>Tamil Stories</h3>
          <StoryGrid 
            stories={stories} 
            selectedStories={new Set()} 
            toggleSelectStory={() => {}} 
            toggleLikeStory={toggleLikeStory}
            likedStories={new Set(stories.map(story => story.id))}
          />
        </>
      ) : (
        <p>No stories liked yet.</p>
      )}
    </div>
  );
};

export default UserUsers;
