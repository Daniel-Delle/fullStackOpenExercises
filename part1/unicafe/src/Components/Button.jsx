import React from "react";

function Button({ good, neutral, bad }) {
  return (
    <div>
      <button onClick={good}>Good</button>
      <button onClick={neutral}>Neutral</button>
      <button onClick={bad}>Bad</button>
    </div>
  );
}

export default Button;
