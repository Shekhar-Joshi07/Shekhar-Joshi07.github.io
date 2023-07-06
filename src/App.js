import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SkillsSection from "./components/SkillsSection";
import ProjectSection from "./components/ProjectSection";
import Stats from "./components/Stats";
import Contact from "./components/Contact";
import ParticleBackground from "./ParticleBackground";
import Loader from "./components/Loader";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3200);

    // Clean up timer on component unmount
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
    {loading ? (
      <><ParticleBackground/>
      <Loader />
      </>
    ) : (
      <div>
      <ParticleBackground/>
      <Navbar />
      <Hero  />
      <About />

      <SkillsSection />

      <ProjectSection />

      <Stats />

      <Contact />
    </div>
    )}
  </>
  );
};

export default App;
