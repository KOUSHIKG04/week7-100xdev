import { useState, useEffect } from "react";
import axios from "axios";
import { FaGithub } from "react-icons/fa";
import "./GitHubInfoCard.css";

function GitHubInfoCard({ username }) {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUserData(response.data);
    };
    fetchData();
  }, [username]);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div className="github-info-card">
      <img
        src={userData.avatar_url}
        alt={`${userData.login}'s avatar`}
        className="avatar"
      />
      <h2>{userData.name || userData.login}</h2>
      <p>{userData.bio}</p>
      <a href={userData.html_url}>
        <FaGithub /> VIEW PROFILE
      </a>
      <p>Public Repos: {userData.public_repos}</p>
    </div>
  );
}

export default GitHubInfoCard;
