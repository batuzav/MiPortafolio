import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Header from "./components/header";
import About from "./components/about";
import Resume from "./components/resume";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
