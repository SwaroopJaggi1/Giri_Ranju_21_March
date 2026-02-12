import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import '../styles/HeroSection.css';
import bgImage from "../assets/giri_ranju.jpeg";

const HeroSection = () => {
  const scrollToJourney = () => {
    const journeySection = document.getElementById('journey-section');
    if (journeySection) {
      journeySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Girish ❤️ Ranjitha</h1>
        <p className="hero-subtitle">Your 3-Day Escape</p>
        <p className="hero-subtitle">Temples, Western Ghats & Ocean Breezes</p>
        <p className="hero-location">Karnataka • 3 Days of Romance & Adventure</p>
        
        <Button className="hero-cta" onClick={scrollToJourney}>
          Start the Journey
        </Button>
      </div>

      <button className="scroll-indicator" onClick={scrollToJourney}>
        <ChevronDown className="scroll-icon" />
      </button>
    </section>
  );
};

export default HeroSection;