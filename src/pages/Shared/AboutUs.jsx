import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const AboutUs = () => {
  return (
    <div className=" py-16 px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-extrabold mb-6 mt-16">About Us</h1>
        <p className="mb-6 text-lg">
          Welcome to <span className="font-bold">Imagica</span>, where the magic of stories and the excitement of learning collide! We are a passionate team of educators, developers, and storytellers dedicated to creating an engaging and immersive educational experience for children. Our mission is to inspire a lifelong love of reading and learning by transforming the way children interact with stories.
        </p>

        {/* Image Carousel */}
        <Carousel showThumbs={false} autoPlay infiniteLoop showStatus={false}>
          <div>
            <img src="https://ik.imagekit.io/SIBHI/Imagica/iStock-1417486686.jpg" alt="Image 1" />
            
          </div>
          <div>
            <img src="https://ik.imagekit.io/SIBHI/Imagica/word-image4.jpeg" alt="Image 2" />
           
          </div>
          <div>
            <img src="https://ik.imagekit.io/SIBHI/Imagica/family-reading-bedtime-2021-04-02-18-49-19-utc.jpg" alt="Image 3" />
          
          </div>
        </Carousel>

        <h2 className="text-3xl font-bold mb-4 mt-10">Our Vision</h2>
        <p className="mb-6 text-lg">
          At Imagica, we envision a world where every child has access to innovative and interactive learning tools that make education fun and exciting. We believe that stories have the power to spark imagination, creativity, and critical thinking skills. Our goal is to harness this power by integrating state-of-the-art technology with classic storytelling to create an unparalleled educational platform.
        </p>
        <h2 className="text-3xl font-bold mb-4">What We Offer</h2>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li><strong>Interactive Stories:</strong> Our stories come to life with interactive elements that encourage children to engage with the narrative, make decisions, and explore different outcomes.</li>
          <li><strong>Educational Games:</strong> Fun and educational games are integrated into our platform to reinforce learning objectives in a playful and enjoyable way.</li>
          <li><strong>Reading Materials:</strong> A rich library of reading materials, ranging from classic tales to new adventures, is available to cater to various reading levels and interests.</li>
          <li><strong>Creative Activities:</strong> We offer a variety of creative activities, such as drawing, crafting, and writing, to foster artistic expression and creativity in children.</li>
        </ul>
        <h2 className="text-3xl font-bold mb-4">Our Innovative Approach</h2>
        <p className="mb-6 text-lg">
          Imagica is built on a foundation of cutting-edge technology and innovative educational principles. Our platform utilizes the latest advancements in artificial intelligence, augmented reality, and gamification to create an immersive learning environment. Here’s how we stand out:
        </p>
        <ul className="list-disc list-inside mb-6 text-lg">
          <li><strong>Artificial Intelligence:</strong> Personalized learning paths and recommendations tailored to each child's unique needs and interests.</li>
          <li><strong>Augmented Reality:</strong> Bringing stories and educational content to life with immersive AR experiences.</li>
          <li><strong>Gamification:</strong> Integrating game mechanics to motivate and engage children in their learning journey.</li>
        </ul>
        <h2 className="text-3xl font-bold mb-4">"Have control over the Data over what your children consume"</h2>
        <p className="mb-6 text-lg">
          We invite you to join us on our mission to revolutionize children's education through the power of storytelling and technology. Together, we can create a future where learning is an adventure that every child looks forward to.
        </p>
        <p className="text-lg">
          Thank you for being a part of the Imagica community. Let’s embark on this magical journey of learning and discovery together!
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
