import React, { useState } from "react";
import "./NameInput.css";

export function NameInput({ onSubmit }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault;
    if (name.trim()) {
      onSubmit(name);
    }
  }

  return (
    <div className="name-input-container">
      <h3>ENTER YOUR NAME</h3>
      <form onSubmit={handleSubmit}>
        <input
          className="name-input"
          type="text"
          value={name}
          placeholder="ENTER NAME"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit" className="submit-button">
          SUBMIT
        </button>
      </form>
    </div>
  );
}
