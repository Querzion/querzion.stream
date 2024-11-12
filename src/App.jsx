import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './assets/scss/main.scss';
import './assets/scss/theme.scss';

import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import Start from "./pages/Start";
import End from "./pages/End";
import PrimaryDisplay from "./pages/PrimaryDisplay";
import Cam from "./pages/Cam";

function App() {
  const featuresRef = useRef(null);

  const scrollToSection = (sectionRef) => {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <BrowserRouter>
        <Header scrollToFeatures={() => scrollToSection(featuresRef)} />
        <main>
          <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/Cam" element={<Cam />} />
            <Route path="/Display" element={<PrimaryDisplay />} />
            <Route path="/End" element={<End />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      
    </>
  )
}

export default App
