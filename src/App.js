import logo from "./logo.svg"

import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <p className="title">
          Getting Started Completed!
        </p>
        <img src={logo} className="logo" alt="logo" />
        <p className="subheading">
          You've successfully deployed your first container!
        </p>
        <div className="link-wrapper">
          <a
            className="link"
            href="https://docs.cycle.io/docs/intro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Docs
          </a>
          <a
            className="link"
            href="https://api-docs.cycle.io/api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API Reference
          </a>
          <a
            className="link"
            href="https://cycle.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>          
        </div>
      </header>
    </div>
  );
}

export default App;
