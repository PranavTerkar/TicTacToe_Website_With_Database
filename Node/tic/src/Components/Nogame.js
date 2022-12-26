import React from "react";
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

import "./Nogame.css";

function Your_Game() {
  return (
    <div className="nogame">
      <h2 className="nogame__title1">Your Game</h2>
      <h1 className="nogame__title2">
        No Game <br /> Found
      </h1>
      <Link to="/Secondlogin">
        <button type="button" class="nogame__button btn btn-warning">
          Start a new Game
        </button>
      </Link>
    </div>
  );
}

export default Your_Game;
