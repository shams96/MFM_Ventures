import React from 'react';
    import { profileData } from '../data';

    function Profile() {
      return (
        <div className="container">
          <div className="profile-container">
            <h2>{profileData.name}</h2>
            <p><strong>Skills:</strong> {profileData.skills.join(', ')}</p>
            <p><strong>Interests:</strong> {profileData.interests.join(', ')}</p>
            <div className="profile-details">
              <h3>About</h3>
              <p>{profileData.about}</p>
              <h3>Looking For</h3>
              <p>{profileData.lookingFor}</p>
            </div>
          </div>

        </div>
      );
    }

    export default Profile;
