import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Projects/>
      <Contact/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
