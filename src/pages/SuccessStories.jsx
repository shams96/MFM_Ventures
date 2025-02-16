import React from 'react';
    import { successStoriesData } from '../data';

    function SuccessStories() {
      return (
        <div className="container">
          <h2 className="success-stories">Success Stories</h2>
          {successStoriesData.map((story) => (
            <div key={story.id} className="success-story">
              <h3>{story.title}</h3>
              <p>{story.description}</p>
            </div>
          ))}
        </div>
      );
    }

    export default SuccessStories;
