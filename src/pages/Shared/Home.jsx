import GridPattern from '@/components/magicui/animated-grid-pattern'
import React from 'react'
import { cn } from "@/lib/utils";
import { BorderBeam } from '@/components/magicui/border-beam';
import { Button } from "@/components/ui/button";
import BoxReveal from "@/components/magicui/box-reveal";
const Home = () => {
    return (

<div>
      <div class="animateme">
      <ul class="bg-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
   </div> 
   
<div id="wrapper">
  <nav>
    {/* <ul>
      <li>
        <a href="#me">About me</a>

      </li>
      <li>
        <a href="#work">Noteworthy Pens</a>

      </li>
    </ul> */}
  </nav>
  <header>
    {/* <img src="https://assets.codepen.io/6538694/internal/avatars/users/default.png?fit=crop&format=auto&height=512&width=512"/> */}
    <h1>
   


    {/* <div className="h-full w-full max-w-[32rem] items-center justify-center overflow-hidden pt-8"> */}
    <div className='h-full w-full flex justify-center items-center'>
      <BoxReveal boxColor={"#5046e6"} duration={1}>
        <p className="text-[3.5rem] font-semibold">
        HEy! Welcome to FableMindzz <span className="text-[#5046e6]"></span>
        </p>
      </BoxReveal>

    </div>
 
      

    </h1>

  </header>
  
  <section id="me">
    
  <img src="https://www.pinclipart.com/picdir/big/6-61137_kids-reading-clipart-children-reading-clipart-png-download.png"/>

    <article>

<h3>
Welcome to FableMindzz, your go-to interactive storytelling app that makes reading an adventure! We believe in the power of stories to inspire, educate, and foster a lifelong love of learning. At FableMindzz, we create immersive reading experiences with captivating visuals, engaging interactive elements, and heartfelt narrations. Our mission is to nurture young minds by offering a safe and enriching environment where every story plants seeds of knowledge, empathy, and wonder. Join us in sparking curiosity and igniting the joy of reading with FableMindzz, where every story opens up a world of possibilities.
</h3>




    </article>
    
  </section>
  
  <main>

    <section id="work">
      <h2><strong>Journals</strong></h2>
      {/* <article class="card">
        <div class="card-header">
          <img src="https://i.pinimg.com/474x/a2/a3/c4/a2a3c4972af766fb66210a636641db21.jpg" />
        </div>
        <div class="card-body">
          <h3>Kids have access to a vast collection of books, from timeless classics to contemporary bestsellers, all in one convenient place. This enables them to easily discover and explore new books without the need to physically visit a library or bookstore.</h3>
          
        </div>
      </article>
      <article class="card">
        <div class="card-header">
          <img src="" />
        </div>
        <div class="card-body">
          <h3>Title 2</h3>
        PAGE2
        </div>
      </article> */}
      {/* <article class="card">
        <div class="card-header">
          <img src="https://tse4.mm.bing.net/th?id=OIP.z-8dZ_UlnJB4QfgyYxv48wHaFj&pid=Api&P=0&h=180" />
        </div>
        <div class="card-body">
          <h3>Title 3</h3>
         PAGE 3
        </div>
      </article> */}
      {/* <article class="card">
        <div class="card-header">
          <img src="" />
        </div>
        <div class="card-body">
          <h3>TITLE 4</h3>
          
        </div>
      </article> */}
      <article class="card">
        <div class="card-header">
          <img src="https://tse2.mm.bing.net/th?id=OIP.9ZHgTPjwKTuK_X6YKGNLoAHaEK&pid=Api&P=0&h=180" />
        </div>
        <div class="card-body">
          <h3>Story Development</h3>
          To help users develop their stories, characters, and plots.
 Details about characters, including their backgrounds, motivations, and relationships.
Breakdown of story arcs, major events, and chapter summaries.
Notes on the setting, world rules, and history.
Drafts and ideas for specific scenes or dialogues
        </div>
      </article>
      <article class="card">
        <div class="card-header">
          <img src="https://tse2.mm.bing.net/th?id=OIP._zPeEUgMg_65x1xDRsnvXAHaEo&pid=Api&P=0&h=180" />
        </div>
        <div class="card-body">
          <h3>  Idea Journal</h3>
      To capture spontaneous ideas, inspirations, and prompts.
     Space for jotting down ideas quickly.
    Collections of quotes or snippets that inspire writing.
    Story prompts or challenges to spark creativity.
        </div>
      </article>
      <article class="card">

        <div class="card-header">
          <img src="https://shots.codepen.io/username/pen/OJrrNxa-512.jpg" />
        </div>
        <div class="card-body">
          <h3>Collaborative Journal</h3>
          To facilitate collaboration between multiple authors or contributors.
Collaborative space for multiple users to contribute ideas and notes.
Communication tools for discussing story elements.
Track changes and contributions from different users.

        </div>

      </article>
      <article class="card">
        <div class="card-header">
          <img src="https://tse1.mm.bing.net/th?id=OIP.D_q25LH4ntt8thr_Cr5q0wHaD5&pid=Api&P=0&h=180" />
        </div>
        <div class="card-body">
          <h3>Integration</h3>
       Integration with tools like Scrivener, Google Drive, or Evernot
        Share progress or published stories directly to social media platforms.
Incorporating these features can significantly enrich the storytelling app, making it a versatile and engaging platform for writers and readers alike.
        </div>

      </article>
      
    </section>

     <aside id="shortcuts"> 
      {/* <section>
        <h3>Recent Pens</h3>
        <article>
          <h4><a href="https://codepen.io/Jazzzy92/full/JjqNpxr" target="_blank">Interactive Color Changer</a></h4>
          <small class="ui"><a href="https://codepen.io/search/pens?q=ui">test-ui</a></small> <small class="misc"><a href="https://codepen.io/search/pens?q=javascript">javascript</a></small><small class="interactive"><a href="https://codepen.io/search/pens?q=interactive">interactive</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/YzBgWGm" target="_blank">Fantasy RPG - Interactive Landing page</a></h4>
          <small class="ui"><a href="https://codepen.io/search/pens?q=ui">dark-ui</a></small> <small class="misc"><a href="https://codepen.io/search/pens?q=jquery">jquery</a></small><small class="responsive"><a href="https://codepen.io/search/pens?q=auto-fit">auto-fit</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/OJdEeKV" target="_blank">Motivational Phone Wallpaper</a></h4>
          <small class="style"><a href="https://codepen.io/search/pens?q=glassmorphism" target="_blank">glassmorphism</a></small>
          <small class="ui"><a href="https://codepen.io/search/pens?q=ui" target="_blank">mobile-ui</a></small>
          <small class="misc"><a href="https://codepen.io/search/pens?q=aestetical" target="_blank">aestetical</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/gOqKewE" target="_blank">Tell it to my ♥</a></h4><small class="ui"><a href="https://codepen.io/search/pens?q=light-ui" target="_blank">light-ui</a></small><small class="responsive"><a href="https://codepen.io/search/pens?q=container-query" target="_blank">container-query</a></small><small class="misc"><a href="https://codepen.io/search/pens?q=delicate" target="_blank">delicate</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/ZEwryyj" target="_blank">Gaming-/Character-Profile</a></h4>
          <small class="ui"><a href="https://codepen.io/search/pens?q=ui">dark-ui</a></small> <small class="style"><a href="https://codepen.io/search/pens?q=bento">bento</a></small><small class="misc"><a href="https://codepen.io/search/pens?q=mix-blend-mode">mix-blend-mode</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/LYypbLr" target="_blank">Funny Forumbit (recycled)</a></h4>
          <small class="misc">
            <a href="https://codepen.io/search/pens?q=hover" target="_blank">hover</a>
          </small>
          <small class="responsive">
            <a href="https://codepen.io/search/pens?q=line-clamp" target="_blank">line-clamp</a>
          </small>
          <small class="responsive">
            <a href="https://codepen.io/search/pens?q=resizeable" target="_blank">resizeable</a>
          </small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/oNmbJby" target="_blank">WIP NaNoWriMo-Tracker</a></h4>
          <small class="style"><a href="https://codepen.io/search/pens?q=progressbar" target="_blank">progressbar</a></small>
          <small class="misc"><a href="https://codepen.io/search/pens?q=JQuery" target="_blank">jquery</a></small>
          <small class=""><a href="https://codepen.io/search/pens?q=input" target="_blank">input</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/XWoQbqL" target="_blank">Character-Choice UI</a></h4>
          <small class="ui">
            <a href="https://codepen.io/search/pens?q=ui" target="_blank">game-ui</a>
          </small>
          <small class="responsive">
            <a href="https://codepen.io/search/pens?q=responsive" target="_blank">responsive</a>
          </small>
          <small class="style">
            <a href="https://codepen.io/search/pens?q=glassmorphism" target="_blank">glassmorphism</a>

          </small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/poqqaGJ" target="_blank">Attack on Titan Landingpage</a></h4>
          <small class="ui">
            <a href="https://codepen.io/search/pens?q=ui" target="_blank">forum-ui</a>
          </small>
          <small>
            <a href="https://codepen.io/search/pens?q=responsive" target="_blank">responsive</a>
          </small>
          <small class="misc">
            <a href="https://codepen.io/search/pens?q=clip-path" target="_blank">clip-path</a>
          </small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/OJrrNxa" target="_blank">Calendar Classmorphism</a></h4>
          <small class="ui"> <a href="https://codepen.io/search/pens?q=calendar-ui" target="_blank">calendar-ui</a></small>
          <small class="responsive"> <a href="https://codepen.io/search/pens?q=grid" target="_blank">grid</a></small>
          <small class="style"> <a href="https://codepen.io/search/pens?q=glassmorphism" target="_blank">glassmorphism</a></small><br /><br />

          <h4><a href="https://codepen.io/Jazzzy92/full/poqvzRK" target="_blank">Mobile Forum App- Index</a></h4>
          <small class="ui"> <a href="https://codepen.io/search/pens?q=app-ui" target="_blank">app-ui</a></small>
          <small class="responsive"> <a href="https://codepen.io/search/pens?q=mobile" target="_blank">mobile</a></small>
          <small class="misc"> <a href="https://codepen.io/search/pens?q=tabs" target="_blank">tabs</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/zYMVYMy" target="_blank">Dynamic color change via Color Picker-Part 2</a></h4>
          <small class="misc"> <a href="https://codepen.io/search/pens?q=javascript" target="_blank">javascript</a></small>
          <small class=""> <a href="https://codepen.io/search/pens?q=values" target="_blank">css-variable</a></small>
          <small class=""> <a href="https://codepen.io/search/pens?q=input" target="_blank">input</a></small><br /><br />
          <h4><a href="https://codepen.io/Jazzzy92/full/eYQXjwO" target="_blank">Dynamic color change via Color Picker-Part 1</a></h4>
          <small class="misc"> <a href="https://codepen.io/search/pens?q=javascript" target="_blank">javascript</a></small>
          <small class=""> <a href="https://codepen.io/search/pens?q=values" target="_blank">values</a></small>
          <small class=""> <a href="https://codepen.io/search/pens?q=input" target="_blank">input</a></small><br /><br />
          <h4><a href="https://codepen.io/your-work?cursor=ZD0wJm89MSZwPTEmdj03MDA0MTU2NA==" target="_blank">View all Pens</a></h4>
        </article>
      </section> */}
      {/* <section>
        <h3>Plans & Projects</h3>
        <article>
          <ul>
            <li><a href="https://codepen.io/Jazzzy92/full/OJrrNxa">Calendar UI</a> ✅</li>
            <li>Game Profile UI</li>
            <li>Scroll-Trigger</li>
            <li><a href="https://codepen.io/collection/kNweJQ">"App-Like"-Skin</a> ✅ </li>
            <li>3D-Animation</li>
            <li>Automatic Activity-Counter (# of words + posting frequency)</li>
            <li>Discord x Forum- Integration (Detailed + Personalized Webhook ?)</li>
          </ul>
        </article>
      </section> */}
     </aside>
     
  </main> 
  <footer>
  

    <footer class="footer">
        <div class="footer-content">
            <div class="footer-links">
                <a href="/about">About Us</a>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-of-service">Terms of Service</a>
                <a href="/contact">Contact Us</a>
            </div>
            <div class="footer-social">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                </a>
            </div>
            <div class="footer-info">
                <p>&copy; 2024 FableMindz Inc. All rights reserved.</p>
            </div>
        </div>
    </footer>


 


        
    

  </footer>
</div>


    
   
    </div>
    

    )
}

export default Home