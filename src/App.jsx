import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Podcast from './pages/Podcast';
import Login from './pages/Login';
import Admindash from '../src/pages/admin/Admindash';
import Bubble from '../src/components/Bubble';
import Signup from './pages/Signup';
import Adminlogin from './pages/admin/Adminlogin';
import Premium from './pages/Read';
import Userdash from './pages/admin/Userdash';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleMenuClick = () => {
    console.log('Menu clicked');
  };

  return (
    <Router>
      <Navbar
        onMenuClick={handleMenuClick}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcast" element={<Podcast />} />
        {/* <Route path="/book" element={<Book/>} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/admindash" element={<Admindash/>} />
        <Route path="/bubble" element={<Bubble/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/adminlogin" element={<Adminlogin/>}/>
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/userdash" element={<Userdash/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;




