import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import JourneySection from '../components/JourneySection';
import RouteSection from '../components/RouteSection';
import AccommodationSection from '../components/AccommodationSection';
import Footer from '../components/Footer';
import '../styles/TempleTour.css';

const TempleTour = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`temple-tour ${isVisible ? 'visible' : ''}`}>
      <HeroSection />
      <JourneySection />
      <RouteSection />
      <AccommodationSection />
      <Footer />
    </div>
  );
};

export default TempleTour;