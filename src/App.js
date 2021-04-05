import logo from "./logo.svg";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <SearchEngine defaultCity="Cairo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            weather react
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
