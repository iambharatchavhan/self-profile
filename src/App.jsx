import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Projects/>
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
