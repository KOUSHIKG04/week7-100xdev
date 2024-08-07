import React from "react";
import "./BirthdayCard.css";

export function BirthdayCard({ name }) {
  return (
    <div className="birthday-card">
      <h3>HAPPY BIRTHDAY {name}!</h3>
      <p>Wishing you all the best on your special day!</p>
    </div>
  );
}
