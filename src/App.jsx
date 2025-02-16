import React, { useEffect } from 'react';
    import { Routes, Route, Link } from 'react-router-dom';
    import Home from './pages/Home';
    import About from './pages/About';
    import HowItWorks from './pages/HowItWorks';
    import Profile from './pages/Profile';
    import Projects from './pages/Projects';
    import Signup from './pages/Signup';
    import SuccessStories from './pages/SuccessStories';

    function App() {
      useEffect(() => {
        const handleScroll = () => {
          const header = document.querySelector('header');
          if (window.scrollY > 20) {
            header.classList.add('scrolled');
          } else {
            header.classList.remove('scrolled');
          }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      return (
        <div>
          <header>
            <Link to="/" className="logo">
              <span className='logo-text-mfm'>MFM</span> Ventures
            </Link>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/how-it-works">How It Works</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/projects">Projects</Link></li>
              </ul>
            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/success-stories" element={<SuccessStories />} />
          </Routes>

          <footer>
            <p>&copy; 2024 MFM Ventures. All rights reserved.</p>
          </footer>
        </div>
      );
    }

    export default App;
