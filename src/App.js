import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers'
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import BlogPost from './BlogComponents/BlogPost'

function App() {

  const [heading, setHeading] = useState('Home');

  return (
    <Router>
      <Headers heading={heading} setHeading={setHeading} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blogs' element={<Blogs/>} />
        <Route path="/blogs/:postId" element={<BlogPost setHeading={setHeading} />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;