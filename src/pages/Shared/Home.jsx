import GridPattern from '@/components/magicui/animated-grid-pattern';
import React from 'react';
import BoxReveal from "@/components/magicui/box-reveal";
import { Laugh } from 'lucide-react';

const Home = () => {
  return (
    <div id="wrapper">
      <header>
        <h1>
          <div className="h-full w-full flex justify-center items-center">
          <BoxReveal boxColor="grey" duration={2}>
    <div className="flex items-center">
      {/* Adjust the size and margin as needed */}
      <p className="text-[3.5rem] font-semibold">
        Hey! Welcome to FableMindz..
      </p>
      <Laugh size={50} className="mr-2" />
    </div>
  </BoxReveal>
          </div>
        </h1>
      </header>

      <section id="me">
        <div className="image-row">
          <img
            src="https://ik.imagekit.io/y0qqjzghp/360_F_584265155_roBp1td5CmsPfaK7VMYXeZNxqRXPNSpN.jpg?updatedAt=1723022217850" 
            alt="Story"
            className="image"
          />
          <article>
            <h3>
              Welcome to FableMindzz, your ultimate destination for interactive
              storytelling, where reading transforms into a thrilling adventure! At
              FableMindzz, we harness the enchanting power of stories to inspire,
              educate, and cultivate a lifelong passion for learning. Our platform is
              dedicated to crafting immersive reading experiences that blend
              captivating visuals, engaging interactive elements, and heartfelt
              narrations, making every story a journey of discovery and wonder.
              We are committed to nurturing young minds by providing a safe and
              enriching environment where each tale plants seeds of knowledge,
              empathy, and boundless curiosity. Our mission is to spark creativity,
              ignite the joy of reading, and open up a world of endless possibilities,
              encouraging children to explore new horizons through the magic of
              stories. Join us in our quest to foster a love for reading and
              storytelling, and let FableMindzz be the doorway to adventures that
              inspire and transform.
            </h3>
          </article>
        </div>
      </section>
      
      <main>
        <section id="work">
          <h2 className="text-[3.5rem] font-semibold">
            <span>How it works?</span>
          </h2>
          <div className="image-row">
            <article className="card">
              <div className="card-header">
               
              </div>
              <div className="card-body">
                <h3>Why should I join?</h3>
                To help users develop their stories, characters, and plots. Details
                about characters, including their backgrounds, motivations, and
                relationships. Breakdown of story arcs, major events, and chapter
                summaries. Notes on the setting, world rules, and history. Drafts and
                ideas for specific scenes or dialogues.
              </div>
            </article>
            <article className="card">
              <div className="card-header">
               
              </div>
              <div className="card-body">
                <h3>World of Books</h3>
                "Immerse your child in a world of stories, where every book is a gateway to adventure, learning, and imagination—carefully selected to match their unique interests and developmental stage."
                Explore a diverse collection of hand-picked stories—from timeless classics to educational marvels—tailored to ignite curiosity and foster a lifelong love for reading.

Our curated selection of hardcover books offers a gateway to new worlds and endless possibilities, ensuring each month brings fresh excitement and discovery.
              </div>
            </article>
          </div>
          <div className="image-row">
            <article className="card">
              <div className="card-header">
                
              </div>
              <div className="card-body">
                <h3>Convenience</h3>
                Interactive storybooks and educational tools enhance learning by offering engaging and personalized experiences. Their interactive features, such as animations, sound effects, and clickable elements, capture children’s attention and make learning more dynamic. These tools often adapt to the reader’s skill level and choices, providing tailored educational experiences that support literacy and critical thinking. They are easily accessible on various devices, making learning portable and convenient.
              </div>
            </article>
            <article className="card">
              <div className="card-header">
               
              </div>
              <div className="card-body">
                <h3>Personalization and Feedback</h3>
                Personalization allows these tools to adapt to each reader’s abilities and preferences, providing customized content that suits individual learning styles. Immediate feedback ensures that children receive instant responses to their choices and actions, enhancing their understanding of concepts and enabling real-time progress tracking.
              </div>
            </article>
          </div>
        </section>
      </main>

      
      <section className="section">
      <h2 className="text-[3.5rem] font-semibold">
            <span>Dive into our Enchanting Stories!</span>
          </h2>
        <div className="cards">
          <a href="#" className="card card-1">
            <figure className="visual">
              <img className="card-img" src="https://ik.imagekit.io/y0qqjzghp/199768defe3e76f39e3d96979cbaeb5f.jpg?updatedAt=1723218599608" alt="Early Access" />
              <figcaption className="figcaption">FairyTales and folklore</figcaption>
            </figure>
          </a>
          <a href="#" className="card card-3">
            <figure className="visual">
              <img className="card-img" src="https://ik.imagekit.io/y0qqjzghp/1_9HnuieqOpk07oUFb9qE_lw.jpg?updatedAt=1723219838314" alt="New Releases" />
              <figcaption className="figcaption">Fables</figcaption>
            </figure>
          </a>
          
          <a href="#" className="card card-2">
            <figure className="visual">
              <img className="card-img" src="https://ik.imagekit.io/y0qqjzghp/the-lord-of-the-rings-the-fellowship-of-the-ring-wallpaper-1680x1050_5.jpg?updatedAt=1723218320036" alt="Top Sellers" />
              <figcaption className="figcaption">Fantasy fiction</figcaption>
            </figure>
          </a>
          
          <a href="#" className="card card-4">
            <figure className="visual">
              <img className="card-img" src="https://ik.imagekit.io/y0qqjzghp/best-magazines-for-kids.jpg?updatedAt=1723223384546" alt="Upcoming" />
              <figcaption className="figcaption">Kids Magazines</figcaption>
            </figure>
          </a>
        </div>
      </section>
<div>
  
</div>
      






 
  
 
  

</div>



    

  );
};

export default Home;
