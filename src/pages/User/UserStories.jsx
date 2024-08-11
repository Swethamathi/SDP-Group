import { useState, memo } from 'react';

// All stories data
const allStories = [
  // Fables
  { id: 1, title: 'The Tortoise and the Hare', image: 'tortoise_hare', category: 'Fables', content: 'Once upon a time, there was a tortoise and a hare who had a race. The hare, being much faster, thought he would win easily, so he took a nap during the race. The tortoise, moving steadily, eventually passed the sleeping hare and won the race. The moral of the story is that slow and steady wins the race.', status: 'Published' },
  { id: 2, title: 'The Elves and the Shoemaker', image: 'elves_shoemaker', category: 'Fables', content: 'There was once a poor shoemaker who found some help from mysterious elves. Every night, the elves would come and make beautiful shoes for him. In gratitude, the shoemaker made tiny shoes for the elves, and they were so pleased that they never came back, but the shoemaker’s business prospered.', status: 'Draft' },
  { id: 3, title: 'The Golden Goose', image: 'golden_goose', category: 'Fables', content: 'A poor farmer finds a golden goose that lays golden eggs. His greed leads him to kill the goose to get all the eggs at once, only to find out there were none inside. The moral is to appreciate and not be greedy.', status: 'Published' },
  { id: 4, title: 'The Fox and the Grapes', image: 'fox_grapes', category: 'Fables', content: 'A hungry fox tries to reach some grapes hanging high on a vine. When he can’t reach them, he declares they are sour and not worth having. The moral of the story is that it is easy to denounce what you cannot have.', status: 'Published' },
  { id: 5, title: 'The Lion and the Mouse', image: 'lion_mouse', category: 'Fables', content: 'A lion spares a mouse’s life, and later the mouse helps the lion escape from a hunter’s net. The moral is that kindness is never wasted, and even the smallest creature can be of help.', status: 'Draft' },
  { id: 6, title: 'The Town Mouse and the Country Mouse', image: 'town_country_mouse', category: 'Fables', content: 'A town mouse visits his cousin in the country and finds the simple life to be far better than the luxury of the city, which is full of dangers. The moral is to appreciate what you have.', status: 'Published' },
  { id: 7, title: 'The Ant and the Grasshopper', image: 'ant_grasshopper', category: 'Fables', content: 'An ant works hard all summer to store food, while a grasshopper sings and dances. When winter comes, the ant is prepared while the grasshopper suffers. The moral is the importance of preparation.', status: 'Published' },
  { id: 8, title: 'The Boy Who Cried Wolf', image: 'boy_wolf', category: 'Fables', content: 'A boy repeatedly tricks villagers into thinking a wolf is attacking his flock. When a real wolf appears, no one believes him. The moral is that lying can lead to consequences.', status: 'Draft' },

  // Fairytales
  { id: 9, title: 'The Dragon’s Quest', image: 'dragon_quest', category: 'Fairytales', content: 'In a far-off land, a brave dragon sets off on an epic quest to save his kingdom from a dark sorcerer. Along the way, he encounters magical creatures, solves riddles, and overcomes many challenges. His courage and determination lead him to victory and peace for his realm.', status: 'Published' },
  { id: 10, title: 'Cinderella', image: 'cinderella', category: 'Fairytales', content: 'A kind young woman, mistreated by her stepmother and stepsisters, is magically transformed to attend a royal ball. She captures the heart of a prince and lives happily ever after.', status: 'Published' },
  { id: 11, title: 'Snow White and the Seven Dwarfs', image: 'snow_white', category: 'Fairytales', content: 'A princess is saved by seven dwarfs after being poisoned by a wicked queen. True love’s kiss breaks the spell, and Snow White lives happily ever after.', status: 'Draft' },
  { id: 12, title: 'Jack and the Beanstalk', image: 'jack_beanstalk', category: 'Fairytales', content: 'Jack trades his cow for magic beans, which grow into a giant beanstalk. Climbing it, he finds a giant’s castle, steals treasures, and defeats the giant.', status: 'Published' },
  { id: 13, title: 'Beauty and the Beast', image: 'beauty_beast', category: 'Fairytales', content: 'A young woman named Belle is taken to a magical castle by a Beast. Through kindness and understanding, she breaks the curse and discovers true love.', status: 'Published' },
  { id: 14, title: 'Rapunzel', image: 'rapunzel', category: 'Fairytales', content: 'A girl with long, magical hair is locked in a tower by a wicked witch. A prince rescues her, and they live happily ever after.', status: 'Draft' },
  { id: 15, title: 'The Little Mermaid', image: 'little_mermaid', category: 'Fairytales', content: 'A mermaid princess makes a dangerous deal with a sea witch to become human and win the love of a prince. Her bravery and sacrifice lead to a happy ending.', status: 'Published' },
  { id: 16, title: 'The Ugly Duckling', image: 'ugly_duckling', category: 'Fairytales', content: 'A duckling is ridiculed for being ugly but grows into a beautiful swan. The moral is that true beauty is revealed with time.', status: 'Published' },

  // Fiction Stories
  { id: 17, title: 'The Mysterious Island', image: 'mysterious_island', category: 'Fiction Stories', content: 'A group of adventurers find themselves stranded on a mysterious island filled with secrets and dangers. Their journey to survive and escape leads to incredible discoveries.', status: 'Published' },
  { id: 18, title: 'The Time Traveler', image: 'time_traveler', category: 'Fiction Stories', content: 'A scientist invents a time machine and travels to various points in history. Each journey brings new challenges and insights about humanity.', status: 'Draft' },
  { id: 19, title: 'The Secret of the Haunted Mansion', image: 'haunted_mansion', category: 'Fiction Stories', content: 'A group of friends investigates a haunted mansion and uncovers a thrilling mystery involving hidden treasures and ghostly apparitions.', status: 'Published' },
  { id: 20, title: 'The Last Dragon', image: 'last_dragon', category: 'Fiction Stories', content: 'In a world where dragons are thought to be extinct, a young hero discovers the last dragon and must protect it from those who seek to exploit it.', status: 'Published' },
  { id: 21, title: 'The Lost City of Gold', image: 'lost_city', category: 'Fiction Stories', content: 'An explorer embarks on a quest to find a legendary city of gold. The journey is fraught with danger, but the rewards are beyond imagination.', status: 'Draft' },
  { id: 22, title: 'The Enchanted Forest', image: 'enchanted_forest', category: 'Fiction Stories', content: 'A magical forest holds the key to a young woman’s destiny. She must navigate its wonders and dangers to uncover her true purpose.', status: 'Published' },
  { id: 23, title: 'The Phantom of the Opera House', image: 'phantom_opera', category: 'Fiction Stories', content: 'A mysterious figure haunts an old opera house, leading to suspenseful and dramatic events. The truth behind the phantom’s identity is revealed in a climactic finale.', status: 'Published' },
  { id: 24, title: 'The Secret Agent', image: 'secret_agent', category: 'Fiction Stories', content: 'A skilled secret agent embarks on a high-stakes mission to thwart a global conspiracy. The story unfolds with espionage, danger, and unexpected twists.', status: 'Draft' },

  // Magazines
  { id: 25, title: 'Science Explorers', image: 'science_explorers', category: 'Magazines', content: 'A magazine dedicated to the latest discoveries and innovations in science. Each issue features in-depth articles and fascinating interviews with leading scientists.', status: 'Published' },
  { id: 26, title: 'Creative Arts Monthly', image: 'creative_arts', category: 'Magazines', content: 'Exploring the world of art, music, and theater, this magazine showcases emerging artists and trends in the creative world.', status: 'Published' },
  { id: 27, title: 'Tech Trends Weekly', image: 'tech_trends', category: 'Magazines', content: 'Stay updated with the latest in technology and gadgets. Each issue provides insights into new tech developments and innovations.', status: 'Draft' },
  { id: 28, title: 'History Today', image: 'history_today', category: 'Magazines', content: 'A magazine that delves into significant historical events and figures, providing readers with insightful and engaging articles.', status: 'Published' },
  { id: 29, title: 'Health & Wellness', image: 'health_wellness', category: 'Magazines', content: 'Covering topics related to health, fitness, and wellness, this magazine provides tips and advice for a healthier lifestyle.', status: 'Published' },
  { id: 30, title: 'World Cultures', image: 'world_cultures', category: 'Magazines', content: 'Exploring different cultures around the world, this magazine offers a glimpse into the diverse traditions and lifestyles of various communities.', status: 'Draft' },
  { id: 31, title: 'Travel Adventures', image: 'travel_adventures', category: 'Magazines', content: 'Discover exciting travel destinations and adventures. Each issue features travel tips, destination guides, and stunning photography.', status: 'Published' },
  { id: 32, title: 'Fashion Forward', image: 'fashion_forward', category: 'Magazines', content: 'A look at the latest trends in fashion, featuring interviews with designers, style tips, and runway highlights.', status: 'Draft' },

  // Additional Stories (Fables)
  { id: 33, title: 'The Farmer and the Stork', image: 'farmer_stork', category: 'Fables', content: 'A farmer catches a stork in his net along with some other birds. The stork pleads for mercy, claiming it is innocent. The farmer says that it should not have been among the thieves.', status: 'Published' },
  { id: 34, title: 'The Hare and the Tortoise', image: 'hare_tortoise', category: 'Fables', content: 'A hare and a tortoise have a race. The hare, being overconfident, takes a nap and loses the race to the tortoise. The moral is that persistence and hard work win.', status: 'Published' },
  { id: 35, title: 'The Frog Prince', image: 'frog_prince', category: 'Fables', content: 'A frog turns into a prince after being kissed by a princess. The story teaches that promises should be kept and that one should not judge by appearances.', status: 'Draft' },
  { id: 36, title: 'The Wind and the Sun', image: 'wind_sun', category: 'Fables', content: 'The wind and the sun compete to see who can make a traveler remove his coat. The sun wins by gently warming the traveler, showing that kindness can achieve what force cannot.', status: 'Published' },
  { id: 37, title: 'The Crow and the Pitcher', image: 'crow_pitcher', category: 'Fables', content: 'A thirsty crow finds a pitcher with a little water at the bottom. It drops pebbles into the pitcher until the water rises and it can drink. The story illustrates the value of ingenuity.', status: 'Draft' },
  { id: 38, title: 'The Dog and His Reflection', image: 'dog_reflection', category: 'Fables', content: 'A dog sees its reflection in water and tries to grab it, losing the piece of meat it was holding. The moral is not to be greedy and to appreciate what you have.', status: 'Published' },
  { id: 39, title: 'The Lion and the Mouse', image: 'lion_mouse', category: 'Fables', content: 'A lion spares a mouse’s life, and later the mouse helps the lion escape from a hunter’s net. The moral is that kindness is never wasted, and even the smallest creature can be of help.', status: 'Published' },
  { id: 40, title: 'The Fox and the Crane', image: 'fox_crane', category: 'Fables', content: 'A fox invites a crane to dinner but serves the meal in a flat dish that the crane cannot eat from. When the crane returns the favor, it serves the meal in a long-necked jar, teaching a lesson about reciprocity.', status: 'Draft' },

  // Additional Stories (Fairytales)
  { id: 41, title: 'Rumpelstiltskin', image: 'rumpelstiltskin', category: 'Fairytales', content: 'A miller’s daughter is forced to spin straw into gold by a magical imp. She discovers the imp’s name and breaks his spell, securing her future.', status: 'Published' },
  { id: 42, title: 'Hansel and Gretel', image: 'hansel_gretel', category: 'Fairytales', content: 'Siblings Hansel and Gretel are abandoned in the forest and discover a house made of candy. They outwit the witch living there and return home safely.', status: 'Published' },
  { id: 43, title: 'The Frog Prince', image: 'frog_prince', category: 'Fairytales', content: 'A frog is transformed into a prince by a princess’s kiss. The story teaches that promises should be honored and that people should not be judged by appearances.', status: 'Draft' },
  { id: 44, title: 'The Twelve Dancing Princesses', image: 'twelve_princesses', category: 'Fairytales', content: 'Twelve princesses escape to a magical realm each night. A soldier discovers their secret and is rewarded for his bravery.', status: 'Published' },
  { id: 45, title: 'The Gingerbread Man', image: 'gingerbread_man', category: 'Fairytales', content: 'A gingerbread man comes to life and outruns everyone in his path until he is finally caught by a fox. The story illustrates the consequences of overconfidence.', status: 'Draft' },
  { id: 46, title: 'Goldilocks and the Three Bears', image: 'goldilocks', category: 'Fairytales', content: 'Goldilocks enters the home of three bears, tries their porridge, chairs, and beds, and is discovered by the bears. The story highlights the importance of respecting others’ property.', status: 'Published' },
  { id: 47, title: 'The Little Match Girl', image: 'match_girl', category: 'Fairytales', content: 'A poor girl tries to sell matches on New Year’s Eve and experiences a series of magical visions before passing away. The story reflects themes of poverty and compassion.', status: 'Published' },
  { id: 48, title: 'Thumbelina', image: 'thumbelina', category: 'Fairytales', content: 'A tiny girl named Thumbelina encounters various magical creatures before finding her place in the world. The story celebrates individuality and perseverance.', status: 'Draft' },

  // Additional Stories (Fiction Stories)
  { id: 49, title: 'The Lost Treasure', image: 'lost_treasure', category: 'Fiction Stories', content: 'A treasure map leads a group of friends on a thrilling adventure to find hidden treasure. Along the way, they face challenges and uncover secrets.', status: 'Published' },
  { id: 50, title: 'The Enigma Machine', image: 'enigma_machine', category: 'Fiction Stories', content: 'A cryptologist discovers a mysterious machine that can decode secret messages. The story involves espionage, intrigue, and unraveling a global conspiracy.', status: 'Draft' },
  { id: 51, title: 'The Ghost Ship', image: 'ghost_ship', category: 'Fiction Stories', content: 'A haunted ship appears off the coast, and a team of investigators boards it to uncover its dark past and escape the spirits that haunt it.', status: 'Published' },
  { id: 52, title: 'The Secret Society', image: 'secret_society', category: 'Fiction Stories', content: 'A young journalist stumbles upon a secret society with hidden agendas. The story follows their efforts to expose the truth.', status: 'Published' },
  { id: 53, title: 'The Cyber Heist', image: 'cyber_heist', category: 'Fiction Stories', content: 'A group of hackers plans an elaborate cyber heist to steal valuable data from a high-security company. The story is filled with suspense and technological intrigue.', status: 'Draft' },
  { id: 54, title: 'The Alien Encounter', image: 'alien_encounter', category: 'Fiction Stories', content: 'An ordinary person has a close encounter with an alien species and must navigate a complex situation that affects the future of humanity.', status: 'Published' },
  { id: 55, title: 'The Final Frontier', image: 'final_frontier', category: 'Fiction Stories', content: 'Astronauts embark on a journey to the outer reaches of space, facing unknown dangers and discovering new worlds.', status: 'Published' },
  { id: 56, title: 'The Secret Lab', image: 'secret_lab', category: 'Fiction Stories', content: 'A group of students finds a hidden laboratory and uncovers experiments that could change the world. Their adventures lead to unexpected discoveries.', status: 'Draft' },

  // Additional Stories (Magazines)
  { id: 57, title: 'Nature Wonders', image: 'nature_wonders', category: 'Magazines', content: 'Explore the marvels of nature through stunning photography and in-depth articles about wildlife, landscapes, and conservation efforts.', status: 'Published' },
  { id: 58, title: 'Gourmet Delights', image: 'gourmet_delights', category: 'Magazines', content: 'A magazine for food lovers, featuring recipes, restaurant reviews, and culinary tips from top chefs.', status: 'Draft' },
  { id: 59, title: 'Sports Weekly', image: 'sports_weekly', category: 'Magazines', content: 'Coverage of the latest sports events, interviews with athletes, and expert analysis of games and matches.', status: 'Published' },
  { id: 60, title: 'Home & Garden', image: 'home_garden', category: 'Magazines', content: 'Tips and inspiration for home improvement and gardening, including DIY projects, design ideas, and seasonal advice.', status: 'Draft' },
  { id: 61, title: 'Entertainment Buzz', image: 'entertainment_buzz', category: 'Magazines', content: 'All the latest news and trends in movies, music, and celebrity gossip. Features exclusive interviews and behind-the-scenes stories.', status: 'Published' },
  { id: 62, title: 'Parenting Today', image: 'parenting_today', category: 'Magazines', content: 'Advice and support for parents, including parenting tips, child development articles, and family activities.', status: 'Published' },
  { id: 63, title: 'Digital Innovations', image: 'digital_innovations', category: 'Magazines', content: 'Focus on the latest digital trends and technologies, including software developments, gadgets, and tech industry news.', status: 'Draft' },
  { id: 64, title: 'DIY Projects', image: 'diy_projects', category: 'Magazines', content: 'Step-by-step guides for various DIY projects, from home decor to crafts, providing inspiration and practical advice.', status: 'Published' },
];


const StoryItem = memo(({ story, expandedStoryId, onReadMore }) => (
  <div
    key={story.id}
    className="relative bg-white rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col"
  >
    <img
      src={`https://example.com/images/stories/${story.image}.jpg`}
      alt={story.title}
      className="w-full h-48 object-cover rounded-t-xl"
    />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-lg font-bold mb-3 text-gray-900">{story.title}</h3>
      <p className="text-gray-600 mb-2">Status: <span className={`font-semibold ${story.status === 'Published' ? 'text-green-600' : 'text-yellow-600'}`}>{story.status}</span></p>
      <p className="text-gray-700 mb-4">
        {expandedStoryId === story.id ? story.content : `${story.content.substring(0, 100)}...`}
      </p>
      <button
        onClick={() => onReadMore(story.id)}
        className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition-colors duration-300 w-full text-center"
      >
        {expandedStoryId === story.id ? 'Read Less' : 'Read More'}
      </button>
    </div>
    <div
      className="absolute inset-0 bg-gradient-to-t from-gray-700 to-transparent opacity-20 transition-opacity duration-300 hover:opacity-50 rounded-xl"
      aria-hidden="true"
    />
  </div>
));

const UserStories = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Fairytales');
  const [expandedStoryId, setExpandedStoryId] = useState(null); // State to manage expanded story
  const [currentPage, setCurrentPage] = useState(1); // State to manage pagination
  const storiesPerPage = 8; // Number of stories per page

  // Filter stories based on search and category
  const filteredStories = allStories.filter(story => {
    const matchesSearch = story.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = story.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Group stories by category
  const categories = ['Fairytales', 'Fables', 'Fiction Stories', 'Magazines'];
  const storiesByCategory = categories.reduce((acc, category) => {
    acc[category] = filteredStories.filter(story =>
      story.category === category
    ).slice(0, 10); // Limit to 10 stories per category
    return acc;
  }, {});

  // Calculate the stories to display based on current page
  const indexOfLastStory = currentPage * storiesPerPage;
  const indexOfFirstStory = indexOfLastStory - storiesPerPage;
  const displayedStories = storiesByCategory[selectedCategory].slice(indexOfFirstStory, indexOfLastStory);

  // Calculate total pages
  const totalPages = Math.ceil(storiesByCategory[selectedCategory].length / storiesPerPage);

  const handleReadMore = (storyId) => {
    setExpandedStoryId(expandedStoryId === storyId ? null : storyId);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10 px-5 overflow-x-hidden">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-600">Explore Stories</h1>

      {/* Search Bar */}
      <div className="mb-10 flex justify-center">
        <input
          type="text"
          placeholder="Search stories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-lg p-3 rounded-full bg-white text-gray-700 border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Categories */}
      <div className="mb-10 flex justify-center gap-4 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`py-2 px-6 rounded-full ${selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-300'} shadow-sm hover:bg-indigo-500 hover:text-white transition-colors duration-200`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sections for Each Category */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-indigo-500">{selectedCategory}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {displayedStories.length === 0 ? (
            <p className="text-center text-gray-500 w-full col-span-full">No stories found in this category.</p>
          ) : (
            displayedStories.map(story => (
              <StoryItem
                key={story.id}
                story={story}
                expandedStoryId={expandedStoryId}
                onReadMore={handleReadMore}
              />
            ))
          )}
        </div>
      </section>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-1 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 disabled:bg-gray-300 transition-colors duration-300"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-full ${currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800 border border-gray-300'} shadow-md hover:bg-indigo-500 hover:text-white transition-colors duration-200`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-1 bg-indigo-600 text-white rounded-full shadow-md hover:bg-indigo-700 disabled:bg-gray-300 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserStories;
