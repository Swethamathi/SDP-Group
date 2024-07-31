import React from 'react';
import WordFadeIn from "@/components/magicui/word-fade-in";

const Home = () => {
  const InterviewCard = ({ name, title, image }) => (
    <div className="rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{title}</p>
      </div>
    </div>
  );
const interviews = [
  {
    name: 'Little Red Riding Hood',
    title: 'Little Red Riding Hood is a European fairy tale about a young girl and a sly wolf.',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Little%20Red%20Riding%20Hood.webp',
  },
  {
    name: 'Beauty and the Beast.',
    title: 'Originating in France, this is the story of Belle, a beautiful peasant girl ',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Beauty%20and%20the%20Beast.jpg',
  },
  {
    name: 'The Frog Prince',
    title: 'The Frog Prince; or, Iron Henry" is a German fairy tale ',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/The%20Frog%20Prince.jpg?updatedAt=1722176812593',
  },
  {
    name: 'Cinderella',
    title: '"Cinderella", or "The Little Glass Slipper", is a folk tale with thousands of variants that are told throughout the world. ',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Cinderella.jpeg',
  },
  {
    name: 'Snow White',
    title: '"Snow White" is a German fairy tale, first written down in the early 19th century. ',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Snow%20White.webp',
  },
  {
    name: 'Jack and the Beanstalk',
    title: 'Jack and the Beanstalk" is an English fairy tale. It appeared as "The Story of Jack Spriggins and the Enchanted Bean',
    image: 'https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/Home-Tales/Jack%20and%20the%20Beanstalk.jpg',
  },
];
  return (
    <>
      <section
        id="home"
        className="flex flex-col items-center justify-center py-12 relative h-screen w-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/LittleInn%20Home%20Bg.jpg?updatedAt=1722141348095')",
          backgroundSize: "cover", 
          backgroundPosition: "center", 
        }}
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

      <section id="services-container" className="py-16">
        <h1 className="text-5xl font-bold text-center mb-12">Our Services</h1>
        <div id="services" className="flex justify-center flex-wrap">
          <div className="box border-2 rounded-xl m-5 p-6 max-w-md">
            <img
              src="https://ik.imagekit.io/SrinivasanRavi/Home/LittleInn/stories.webp"
              alt="LittleInn🪼"
              className="h-40 mx-auto rounded-md"
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
              className="h-40 mx-auto rounded-md"
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
              className="h-40 mx-auto rounded-md"
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

      <section
        id="client-section"
        className="py-16 relative"
        style={{ backgroundImage: "url('../image/background2.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-center mb-12">Tales</h1>
        <div className="container mx-auto p-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {interviews.map((interview, index) => (
        <InterviewCard
          key={index}
          name={interview.name}
          title={interview.title}
          image={interview.image}
        />
      ))}
    </div>
  </div>
      </section>

      <section
        id="contact"
        className="py-16 relative"
        style={{ backgroundImage: "url('../image/contact.jpg')" }}
      >
        <h1 className="text-5xl font-bold text-center mb-12">Feedback</h1>
        <div id="contact-box" className="flex justify-center">
          <form action="" className="w-2/5 space-y-4">
            <div className="form-group">
              <label htmlFor="name" className="text-lg font-medium">
                Name:
              </label>
              <input
                type="text"
                name="myname"
                id="name"
                placeholder="Enter Your Name:"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="text-lg font-medium">
                Email:
              </label>
              <input
                type="email"
                name="myemail"
                id="email"
                placeholder="Enter Your Email:"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="text-lg font-medium">
                Phone Number:
              </label>
              <input
                type="number"
                name="number"
                id="phone"
                placeholder="Enter Your Phone Number:"
                maxLength="10"
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="text-lg font-medium">
                Message:
              </label>
              <textarea
                name="Message"
                id="message"
                cols="30"
                rows="10"
                className="w-full p-2 border rounded"
              ></textarea>
            </div>
            <input
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg cursor-pointer"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
