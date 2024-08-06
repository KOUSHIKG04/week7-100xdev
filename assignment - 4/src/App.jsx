import { useState } from "react";
import GitHubInfoCard from "./components/GitHubInfoCard";
import { FaGithub } from "react-icons/fa";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="title-container">
        <h1 className="title">
          <FaGithub size={30} />
          &nbsp; INFO CARD
        </h1>
      </div>
      <GitHubInfoCard username="KOUSHIKG04" />
    </div>
  );
}

export default App;
