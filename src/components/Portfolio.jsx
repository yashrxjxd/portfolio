import React, { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import ParticleBackground from "./ParticleBackground";
import { portfolioApi } from "../services/api";
import { portfolioData as fallbackData } from "../mock";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [portfolioData, setPortfolioData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load portfolio data from backend
  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        setIsLoading(true);
        const response = await portfolioApi.getPortfolioData();
        
        if (response.success && response.data) {
          setPortfolioData(response.data);
        } else {
          console.warn('No portfolio data from API, using fallback data');
          setPortfolioData(fallbackData);
        }
      } catch (error) {
        console.error('Failed to load portfolio data from API, using fallback:', error);
        setPortfolioData(fallbackData);
        setError('Failed to load latest data. Displaying cached version.');
      } finally {
        setIsLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  // Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-zinc-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg mb-4">Failed to load portfolio data</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-green-500 text-black px-6 py-2 rounded-lg hover:bg-green-400 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-zinc-900 text-white overflow-x-hidden">
      <ParticleBackground />
      <Header activeSection={activeSection} />
      
      {error && (
        <div className="fixed top-20 right-4 bg-yellow-500/90 text-black px-4 py-2 rounded-lg z-50">
          <p className="text-sm">{error}</p>
        </div>
      )}
      
      <main className="relative z-10">
        <section id="home">
          <Hero data={portfolioData} />
        </section>
        
        <section id="about" className="py-20">
          <About data={portfolioData} />
        </section>
        
        <section id="skills" className="py-20">
          <Skills data={portfolioData} />
        </section>
        
        <section id="projects" className="py-20">
          <Projects data={portfolioData} />
        </section>
        
        <section id="experience" className="py-20">
          <Experience data={portfolioData} />
        </section>
        
        <section id="contact" className="py-20">
          <Contact data={portfolioData} />
        </section>
      </main>
    </div>
  );
};

export default Portfolio;