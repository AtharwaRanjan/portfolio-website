import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      {/* Toggle button at top right */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{
          position: "fixed",
          top: 20,
          right: 20,
          padding: "6px 12px",
          borderRadius: "24px",
          border: "2px solid #90caf9",
          background: darkMode ? "#222" : "#e3f2fd",
          color: darkMode ? "#90caf9" : "#222",
          fontWeight: "bold",
          fontSize: "0.95em",
          boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
          cursor: "pointer",
          zIndex: 1000,
          transition: "all 0.3s",
        }}
        aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      <Header />
      <main style={{ maxWidth: "800px", margin: "0 auto", padding: "0 16px" }}>
        <About key="about" />
        <br />
        <br />
        <Projects />
        <br />
        <br />
        <Skills />
        <br />
        <br />
        <Contact />
        <br />
        <br />
      </main>
      <Footer />
    </div>
  );
}

export default App;
