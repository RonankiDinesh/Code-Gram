import React from "react";
const user = {
  name: "Dinesh",
  username: "dinesh_7799",
  bio: "Full Stack Developer ",
  avatar: "https://via.placeholder.com/150",
  github_link: "https://github.com/RonankiDinesh",
  dob : "17-09-2005",
};

export default function Profile() {
  return (
    <>
      <div className="profile-container bg-gray-100">
        {/* Header */}
        <div className="prfile-header bg-white">
          <img src="{user.avatar}" alt="" />
          <div className="profile-info">
            <h1 className="profile-name">{user.name}</h1>
            <h2 className="profile-username text-gray-600">@{user.username}</h2>
            <h2 className="profile-gitusername text-gray-600">{user.github_link}</h2>
            <p>{user.bio}</p>
          </div>
        </div>
        {/* Personal Details */}
        <div className="profile-details">
        <h1 className="profile-dob">{user.dob}</h1>
        <h1 className="profile-experience">Experience</h1>
        <h1 className="profile-portfolio">Portfolio</h1>
        </div>
      </div>
    </>
  );
}
