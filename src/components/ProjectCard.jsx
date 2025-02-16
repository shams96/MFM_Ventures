import React, { useState } from 'react';

    function ProjectCard({ project }) {
      const [liked, setLiked] = useState(false);
      const [showFullDescription, setShowFullDescription] = useState(false);

      const toggleLike = () => {
        setLiked(!liked);
      };
      const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };

      const shortDescription = project.description.length > 100
        ? project.description.substring(0, 100) + '...'
        : project.description;

      return (
        <div className="project-card">
          <h3>{project.title}</h3>
          <p>
            {showFullDescription ? project.description : shortDescription}
            {project.description.length > 100 && (
              <button onClick={toggleDescription}>
                {showFullDescription ? 'Show Less' : 'Show More'}
              </button>
            )}
          </p>
          <button onClick={toggleLike} className={`like-button ${liked ? 'liked' : ''}`}>
            {liked ? '❤️' : '🤍'}
          </button>
        </div>
      );
    }

    export default ProjectCard;
