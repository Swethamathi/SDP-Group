import React from 'react';
import { Facebook, Instagram, Linkedin, Github} from 'lucide-react';

const Footer = () => (


    <footer class="w-full bg-gray-200 py-4">
      <section class="flex flex-col md:flex-row justify-around items-start p-4">
        <div class="left-area flex flex-col items-center">
          <h3 class="text-xl font-semibold mb-2">FOLLOW US</h3>
          <ul class="flex space-x-4">
            <li><a href="https://www.instagram.com" class="text-gray-800 hover:text-orange-600"> <Instagram /></a></li>
            <li><a href="https://www.facebook.com/" class="text-gray-800 hover:text-orange-600"> <Facebook /></a></li>
            <li><a href="https://www.linkedin.com/" class="text-gray-800 hover:text-orange-600"><Linkedin/></a></li>
            <li><a href="https://github.com/" class="text-gray-800 hover:text-orange-600"></a><Github/></li>
          </ul>
        </div>
        <div class="center-area flex flex-col items-center mt-4 md:mt-0">
          <h3 class="text-xl font-semibold mb-2">LINK</h3>
          <ul class="space-y-2">
           
            <li><a href="#" class="text-gray-800 hover:underline">Home</a></li>
            <li><a href="#" class="text-gray-800 hover:underline">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-800 hover:underline">Terms</a></li>
          </ul>
        </div>
        <div class="right-area flex flex-col items-center mt-4 md:mt-0">
          <h3 class="text-xl font-semibold mb-2">CONTACT</h3>
          <ul class="space-y-2 text-gray-800">
            <li>Address: Coimbatore</li>
            <li>SwethaMathi</li>
            <li><a href="mailto:fablemindzz242@example.com" class="hover:underline">Mail: fablemindz242@example.com</a></li>
            <li><a href="tel:05555555555" class="hover:underline">Phone: 0555 555 55 55</a></li>
          </ul>
        </div>
      </section>
      <div class="text-center bg-gray-700 text-yellow-50 py-2 mt-4">
        &copy; fablemindz all rights reserved
      </div>
    </footer>
  
  
);

export default Footer;
