import { useState } from 'react';

const UserPodcasts= () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // The full story content
  const fullStory = `
    Once upon a time, there was a hare who was very proud of his speed. He would boast and laugh at the slow pace 
    of the tortoise. "You will never win any race, slowpoke!" the hare would say. The tortoise, however, did not 
    let the hare's words bother him and simply smiled.

    One day, tired of the hare's teasing, the tortoise challenged him to a race. The hare, thinking it was a joke, 
    agreed and said, "This will be the easiest race I’ve ever won!" They decided on a route and the race began.

    The hare, being naturally fast, zoomed ahead and soon left the tortoise far behind. Confident of his win, the hare 
    thought to himself, "I have plenty of time. Why not take a nap?" He lay down under a tree and quickly fell asleep.

    The tortoise, slow but steady, continued to move forward. He did not stop, he did not rest, and he kept his eyes 
    on the finish line. The tortoise passed the sleeping hare and continued on his way.

    Hours later, the hare woke up from his nap. He stretched and yawned, confident that he could still win the race easily. 
    He dashed off towards the finish line, but when he got there, he was shocked to see the tortoise already crossing the line.

    The tortoise turned to the hare and said with a smile, "Slow and steady wins the race." The hare could not believe 
    it. He had lost the race because of his arrogance and overconfidence. The tortoise had won with patience and determination.

    The moral of the story is: It’s better to be slow and steady than to be fast and careless. The tortoise, despite his slow 
    pace, won the race because he stayed focused and kept moving forward, while the hare lost because he underestimated 
    his opponent and was too confident in his abilities.
  `;

  // Shortened summary of the story
  const summary = `
    A boastful hare who was confident in his speed challenged a slow tortoise to a race. The hare, thinking he had 
    plenty of time, took a nap midway through the race. The tortoise, slow but steady, continued on without stopping 
    and crossed the finish line before the hare could catch up. The tortoise won the race, teaching the lesson that 
    slow and steady wins the race.
  `;

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen py-10 px-5">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-indigo-600">The Tortoise and the Hare</h1>

      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-lg mb-4">{isExpanded ? fullStory : summary}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="inline-block bg-indigo-600 text-white py-2 px-4 rounded-full shadow hover:bg-indigo-700 transition-colors duration-300"
        >
          {isExpanded ? 'Read Less' : 'Read More'}
        </button>
      </div>
    </div>
  );
};

export default UserPodcasts;
