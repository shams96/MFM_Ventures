import React, { useState } from 'react';

    function PodcastIdeaCard({ idea }) {
      const [liked, setLiked] = useState(false);
      const [showFullDescription, setShowFullDescription] = useState(false);

      const toggleLike = () => {
        setLiked(!liked);
      };

      const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };

      const shortDescription = idea.description.length > 100
        ? idea.description.substring(0, 100) + '...'
        : idea.description;

      return (
        <div className="podcast-idea-card">
          <h3>{idea.title}</h3>
          <p>
            {showFullDescription ? idea.description : shortDescription}
            {idea.description.length > 100 && (
              <button onClick={toggleDescription}>
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            )}
          </p>
          <a href={idea.link} target="_blank" rel="noopener noreferrer">
            Listen to Episode
          </a>
          <button onClick={toggleLike} className={`like-button ${liked ? 'liked' : ''}`}>
             {liked ? '❤️' : '🤍'}
          </button>
        </div>
      );
    }

    export default PodcastIdeaCard;
