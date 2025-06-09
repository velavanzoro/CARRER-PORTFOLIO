import React from 'react';
import PortfolioNavbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Achievements from './components/Achievements.jsx';
import Contact from './components/Contact.jsx';
import BackgroundVideo from './components/BackgroundVideo';
import './App.css';
import Languages from './components/Languages.jsx';
import ExtraCurricular from './components/ExtraCurricular.jsx';
import ResumeDownload from './components/ResumeDownload.jsx';

const App = () => (
  <>
    {/* 🔁 Background video runs globally behind all content */}
    <BackgroundVideo />

    {/* ⬆️ Foreground components */}
    <PortfolioNavbar />
    <Home />
    <About />
    <Projects />
    <Achievements />
    <Languages/>
    <ExtraCurricular/>
    <ResumeDownload/>
    <Contact />
  </>
);

export default App;
