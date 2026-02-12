import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import '../styles/RouteSection.css';

const RouteSection = () => {
  const places = [
    'Bengaluru',
    'Horanadu',
    'Sringeri',
    'Siganduru',
    'Murudeshwara',
    'Gokarna',
    'Udupi',
    'Malpe'
  ];

  return (
    <section className="route-section">
      <div className="route-container">
        <div className="route-header">
          <h2 className="route-title">Your Route Through Karnataka</h2>
          <p className="route-description">From mountains to beaches - an unforgettable journey</p>
        </div>

        <div className="route-visual">
          <div className="route-path">
            {places.map((place, index) => (
              <div key={index} className="route-stop">
                <div className="route-marker">
                  <MapPin size={20} />
                </div>
                <span className="route-place">{place}</span>
                {index < places.length - 1 && <div className="route-connector" />}
              </div>
            ))}
          </div>
        </div>

        <div className="route-stats">
          <div className="route-stat">
            <div className="stat-icon">
              <Navigation size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value">~800 km</span>
              <span className="stat-label">Total Distance</span>
            </div>
          </div>
          <div className="route-stat">
            <div className="stat-icon">
              <Clock size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value">3 Days</span>
              <span className="stat-label">Journey Time</span>
            </div>
          </div>
          <div className="route-stat">
            <div className="stat-icon">
              <MapPin size={24} />
            </div>
            <div className="stat-content">
              <span className="stat-value">8 Places</span>
              <span className="stat-label">Destinations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;