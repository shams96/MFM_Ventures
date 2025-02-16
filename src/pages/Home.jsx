import React, { useState } from 'react';
    import PodcastIdeaCard from '../components/PodcastIdeaCard';
    import * as data from '../data';
    import { Link } from 'react-router-dom';

    function Home() {
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
      const [messageSent, setMessageSent] = useState(false);

      const handleInputChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form Data (Simulated Send):', formData);
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        setMessageSent(true);
        setFormData({ name: '', email: '', message: '' }); //Clear form

        // Remove message after a few seconds
        setTimeout(() => {
          setMessageSent(false);
        }, 3000);
      };

      return (
        <div className="container">
          <section className="hero">
            <h2>Turn Ideas into Reality</h2>
            <p>
              Inspired by the My First Million podcast? Connect with like-minded
              individuals and build the next big thing.
            </p>
            <Link to="/signup" className="cta-button">
              Join the Community
            </Link>
          </section>
          <section className="features">
          <div className="feature">
            <h3>Connect</h3>
            <p>Find co-founders, developers, and early adopters.</p>
            <Link to="/profile" className="feature-button">Browse Profiles</Link>
          </div>
          <div className="feature">
            <h3>Collaborate</h3>
            <p>Share ideas, brainstorm, and build together.</p>
            <Link to="/projects" className="feature-button">View Projects</Link>
          </div>
          <div className="feature">
            <h3>Launch</h3>
            <p>Turn your MFM-inspired ideas into successful ventures.</p>
            <Link to="/success-stories" className="feature-button">View Success Stories</Link>
          </div>
          </section>

          <section>
            <h2>Latest Ideas from MFM Podcast</h2>
            <div className="podcast-ideas-container">
              {data.podcastIdeasData.map((idea) => (
                <PodcastIdeaCard key={idea.id} idea={idea} />
              ))}
            </div>
          </section>

          <section className='contact-form'>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name='name' placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
              <input type="email" name='email' placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
              <textarea name='message' placeholder="Your Message" value={formData.message} onChange={handleInputChange} required></textarea>
              <button type="submit">Send Message</button>
            </form>
            {messageSent && <p className='message-sent'>Message sent (simulated)!</p>}

          </section>
        </div>
      );
    }

    export default Home;
