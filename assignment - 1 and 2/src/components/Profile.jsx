import React from "react";


function Profile({ user }) {
   
  return (
    <div className="profile-card">
    <div className="cover-photo" style={{ backgroundImage: `url(${user.coverPhoto})` }}>
      <img src={user.profilePicture} alt={`${user.name}'s profile`} className="profile-picture" />
    </div>
    <div className="profile-details">
      <h2>{user.name} <span>{user.age}</span></h2>
      <p>{user.location}</p>
    </div>
    
    <div className="profile-stats">
      <div className="stat">
        <h3>{user.followers}</h3>
        <p>Followers</p>
      </div>
      <div className="stat">
        <h3>{user.likes}</h3>
        <p>Likes</p>
      </div>
      <div className="stat">
        <h3>{user.photos}</h3>
        <p>Photos</p>
      </div>
    </div>
  </div>
  );
}

export default Profile;
