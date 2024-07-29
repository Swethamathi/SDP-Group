import React, { useState, useEffect } from 'react';

const Stories = () => {
  const [stories, setStories] = useState([]);
  const [selectedStories, setSelectedStories] = useState(new Set());
  const [visibleEnglishStoriesCount, setVisibleEnglishStoriesCount] = useState(6);
  const [visibleTamilStoriesCount, setVisibleTamilStoriesCount] = useState(6);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [searchQuery, setSearchQuery] = useState('');
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
      { id: 13, title: 'தெனாலிராமன் மற்றும் இரண்டு திருடர்கள்', image: 'https://ik.imagekit.io/y0qqjzghp/thenali%20raman.jpeg?updatedAt=1722170650290', description: 'தெனாலிராமன் இரண்டு திருடர்களை முந்திவிட்டார்.', language: 'Tamil' },
      { id: 14, title: 'தெனாலிராமன் மற்றும் கூத்தாடி', image: 'https://ik.imagekit.io/y0qqjzghp/clever.jpg?updatedAt=1722171520961', description: 'தெனாலிராமன் மற்றும் ஒரு கூத்தாடியின் கதை.', language: 'Tamil' },
      { id: 15, title: 'அக்பர் மற்றும் பீர்பால்: புத்திசாலியின் பானை', image: 'https://ik.imagekit.io/y0qqjzghp/ab.jpg?updatedAt=1722170933058', description: 'பீர்பால் புத்திசாலித்தனத்தை கற்றுக் கொடுக்கும் கதை.', language: 'Tamil' },
      { id: 16, title: 'பீர்பால் திருடரைப் பிடிக்கிறார்', image: 'https://ik.imagekit.io/y0qqjzghp/tbirbal.jpg?updatedAt=1722171284563', description: 'பீர்பால் தனது புத்திசாலித்தனத்தை பயன்படுத்தி திருடரைப் பிடிக்கிறார்.', language: 'Tamil' },
      { id: 17, title: 'வியாபாரி மற்றும் முட்டாள் கூத்தாடி', image: 'https://ik.imagekit.io/y0qqjzghp/barb.jpg?updatedAt=1722171925977', description: 'ஒரு வியாபாரி மற்றும் ஒரு முட்டாள் கூத்தாடியின் கதை.', language: 'Tamil' },
      { id: 18, title: 'சிங்கமும் புத்திசாலி முயலும்', image: 'https://ik.imagekit.io/y0qqjzghp/lion.jpeg?updatedAt=1722172038921', description: 'ஒரு புத்திசாலி முயல் சிங்கத்தை முந்திவிட்ட கதை.', language: 'Tamil' },
      { id: 19, title: 'முட்டாள் சிங்கமும் புத்திசாலி முயலும்', image: 'https://ik.imagekit.io/y0qqjzghp/rabb.avif?updatedAt=1722172206243', description: 'ஒரு புத்திசாலி முயல் ஒரு முட்டாள் சிங்கத்தை முந்திவிட்ட கதை.', language: 'Tamil' },
      { id: 20, title: 'நரி மற்றும் பட்டம்', image: 'https://ik.imagekit.io/y0qqjzghp/jackal.jpg?updatedAt=1722172288535', description: 'ஒரு நரி ஒரு பட்டத்தை கண்டுபிடிக்கும் கதை.', language: 'Tamil' },
      { id: 21, title: 'முதலை மற்றும் குரங்கு', image: 'https://ik.imagekit.io/y0qqjzghp/Monkey.jpg?updatedAt=1722172390980', description: 'ஒரு புத்திசாலி குரங்கு முதலைக்கு முந்திவிட்ட கதை.', language: 'Tamil' },
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

  const showMoreStories = (language) => {
    if (language === 'English') {
      setVisibleEnglishStoriesCount(prevCount => prevCount + 6);
    } else {
      setVisibleTamilStoriesCount(prevCount => prevCount + 6);
    }
  };

  const showLessStories = (language) => {
    if (language === 'English') {
      setVisibleEnglishStoriesCount(6);
    } else {
      setVisibleTamilStoriesCount(6);
    }
  };

  const filterStoriesByLanguage = (language) => {
    return stories.filter(story => story.language === language);
  };

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const englishStories = filterStoriesByLanguage('English').map(story => story.title.toLowerCase());
    const tamilStories = filterStoriesByLanguage('Tamil').map(story => story.title.toLowerCase());

    if (englishStories.some(title => title.includes(lowerCaseQuery))) {
      setSelectedLanguage('English');
    } else if (tamilStories.some(title => title.includes(lowerCaseQuery))) {
      setSelectedLanguage('Tamil');
    }
  };

  return (
    <div>
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        handleSearch={handleSearch} 
      />
      <div className="language-buttons">
        <button onClick={() => setSelectedLanguage('English')}>English Stories</button>
        <button onClick={() => setSelectedLanguage('Tamil')}>Tamil Stories</button>
      </div>
      {selectedLanguage === 'English' ? (
        <>
          <StoryGrid 
            stories={filterStoriesByLanguage('English').slice(0, visibleEnglishStoriesCount)} 
            selectedStories={selectedStories} 
            toggleSelectStory={toggleSelectStory} 
            toggleLikeStory={toggleLikeStory}
            likedStories={likedStories}
          />
          {visibleEnglishStoriesCount < filterStoriesByLanguage('English').length ? (
            <button className="show-more-button" onClick={() => showMoreStories('English')}>Show More</button>
          ) : (
            <button className="show-more-button" onClick={() => showLessStories('English')}>Show Less</button>
          )}
        </>
      ) : (
        <>
          <StoryGrid 
            stories={filterStoriesByLanguage('Tamil').slice(0, visibleTamilStoriesCount)} 
            selectedStories={selectedStories} 
            toggleSelectStory={toggleSelectStory} 
            toggleLikeStory={toggleLikeStory}
            likedStories={likedStories}
          />
          {visibleTamilStoriesCount < filterStoriesByLanguage('Tamil').length ? (
            <button className="show-more-button" onClick={() => showMoreStories('Tamil')}>Show More</button>
          ) : (
            <button className="show-more-button" onClick={() => showLessStories('Tamil')}>Show Less</button>
          )}
        </>
      )}
      <LikedStories 
        stories={{
          English: filterStoriesByLanguage('English').filter(story => likedStories.has(story.id)),
          Tamil: filterStoriesByLanguage('Tamil').filter(story => likedStories.has(story.id))
        }}
        toggleLikeStory={toggleLikeStory}
      />
    </div>
  );
};

const Header = ({ searchQuery, setSearchQuery, handleSearch }) => {
  return (
    <header>
      <h1>Interactive Stories</h1>
      <input 
        type="text" 
        placeholder="Search our library" 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        style={{ color: 'black' }}
      />
    </header>
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
      
      {stories.Tamil.length > 0 && (
        <>
          <h3>Tamil Stories</h3>
          <StoryGrid 
            stories={stories.Tamil} 
            selectedStories={new Set()} 
            toggleSelectStory={() => {}} 
            toggleLikeStory={toggleLikeStory}
            likedStories={new Set(stories.Tamil.map(story => story.id))}
          />
        </>
      )}
      {stories.English.length === 0 && stories.Tamil.length === 0 && (
        <p>No stories liked yet.</p>
      )}
    </div>
  );
};

export default Stories;
