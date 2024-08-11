import React from 'react';
import WordFadeIn from "@/components/magicui/word-fade-in";

const Home = () => {
  return (
    <>
    <div  className="flex flex-col items-center justify-center py-12 relative h-100% w-screen bg-cover bg-center" style={{
          backgroundImage:
            "url('https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/LittleInn%20Home%20Bg.jpg?updatedAt=1722141348095')",
          backgroundSize: "cover", 
          backgroundPosition: "center",
        }}>
      <hr></hr>
      <section
        id="home"
        className="flex flex-col items-center justify-center py-12 relative h-100% w-screen bg-cover bg-center"
      >
        <WordFadeIn words="Little Inn..." />
        <br />
        <h1 className="text-2xl text-center font-bold">
          Explore a World of Wonder: Interactive Stories for Young Readers
        </h1>
        <a href="/#services-container">
          <button
            id="btn"
            className="mt-4 font-bold py-2 px-4 border border-activate rounded-lg"
          >
            EXPLORE
          </button>
        </a>
      </section>
      </div>

      <section id="services-container" className="py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
        <div id="services" className="flex justify-center flex-wrap">
          <div className="box border-2 rounded-xl m-5 p-6 max-w-md">
            <img
              src="https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/stories.webp"
              alt="LittleInn🪼"
              className="h-100 mx-auto rounded-md"
            />
            <h2 className="text-2xl font-semibold text-center mt-4">
              Stories
            </h2>
            <p className="text-center mt-2">
            Stories are narratives that entertain or convey messages through structured sequences of events.
             They often include characters, settings, plots, conflicts, and resolutions. 
             Whether fictional or non-fictional, stories serve to educate, entertain, and preserve cultural values across generations.
            </p>
          </div>
          <div className="box border-2 rounded-xl m-5 p-6 max-w-md">
            <img
              src="https://i.pinimg.com/564x/dd/4c/1e/dd4c1e9840e0da44edf37c4b821992dc.jpg"
              alt="CEO"
              className="h-100 mx-auto rounded-md"
            />
            <h2 className="text-2xl font-semibold text-center mt-4">Podcasts</h2>
            <p className="text-center mt-2">
            Compelling Narratives: Story podcasts should have well-crafted narratives that capture the listener’s attention. 
            This includes strong plots, engaging characters, and immersive settings that transport the audience into the story world.
            This emotional resonance keeps listeners invested in the story.
            </p>
          </div>
          <div className="box border-2 rounded-xl m-5 p-6 max-w-md">
            <img
              src="https://i.pinimg.com/564x/30/99/2e/30992e4a3ac37153cff94ac72a973945.jpg"
              alt="Products"
              className="h-100 mx-auto rounded-md"
            />
            <h2 className="text-2xl font-semibold text-center mt-4">
              Story Creation
            </h2>
            <p className="text-center mt-2">
            Everyone has a story worth sharing, and now it's easier than ever to let your voice be heard. 
            Our platform invites you to upload your unique tales, whether they're personal experiences, 
            fictional adventures, or insightful reflections.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
