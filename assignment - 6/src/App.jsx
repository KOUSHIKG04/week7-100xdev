import { useState } from "react";
import { BirthdayCard } from "./components/BirthayCard";
import { NameInput } from "./components/NameInput";
import "./App.css";

function App() {
   
  const [name, setName] = useState('')
  const [card, setCard] = useState(false)

  function handleNameSubmit(name) {
    setName(name);
    setCard(true);
  }

  return (
    <div className="App">
      {
        !card ? (
          <NameInput onSubmit={handleNameSubmit}/>
        ) : (
          <div className="cards-container">
            <BirthdayCard name={name}/>
          </div>
        )
      }
     </div>
  );
}

export default App;
