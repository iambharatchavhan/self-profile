import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/aboutme/About";

function App() {
  return (
    <>
      <Header />
      <About />
      <Footer />
    </>
  );
}

export default App;
