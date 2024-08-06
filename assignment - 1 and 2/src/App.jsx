import React from "react";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import users from "./users";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Header />
      {users.map((user, index) => (
        <Profile key={index} user={user} />
      ))}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
