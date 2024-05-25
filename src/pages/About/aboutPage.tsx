// src/App.tsx
import React from "react";
import Header from "../../components/Header";
import About from "../../components/About";
import Slideshow from "../../components/Slideshow";
import "../../css/styles.css";

const App: React.FC = () => (
  <div>
    <Header />
    <main>
      <div className="flex wrapper">
        <About />
        <Slideshow />
      </div>
    </main>
  </div>
);

export default App;
