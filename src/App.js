import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Cairo" />

        <footer>
          This project was coded by{" "}
          <a
            href="https://zinaelnahel.github.io/profile/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Zina El Nahel
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/zinaelnahel/weather-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://flamboyant-villani-ab8b6b.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
