// src/App.jsx
import React from "react";
import Home from "./pages/Home";
import "./App.css"; // styles

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Abdulscan Lite</h1>
      </header>

      <main className="app-main">
        <Home />
      </main>

      <footer className="app-footer">
        <p>© 2026 Abdulscan</p>
      </footer>
    </div>
  );
}

export default App;
