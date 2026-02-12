import React from 'react';
import { Star, MapPin, Check } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import '../styles/AccommodationSection.css';

const AccommodationSection = () => {
  const accommodations = [
    {
      name: 'Sringeri Matta',
      location: 'Sringeri / Agumbe',
      day: 'Day 1',
      rating: '4.5',
      image: 'https://media.istockphoto.com/id/1218798439/photo/sunrise-at-coorg.jpg?s=2048x2048&w=is&k=20&c=6shhtfTqOnsXjKLJrP_d8IbKgJAUxymaOvBr0X2ePOY=',
      features: ['Clean & Safe', 'Close to Temple', 'Peaceful atmosphere'],
      reason: 'Perfect for a calm first night after temple visits',
      recommended: true
    },
    {
      name: 'Gokarna Hosteller',
      location: 'Gokarna Beach',
      day: 'Day 2',
      rating: '4.7',
      image: 'https://lh3.googleusercontent.com/p/AF1QipPfk-Ln5AdJKsBerpYchcSTG4E-a58pODgI5ob_=w324-h312-n-k-no',
      features: ['Beachfront', 'Sunset Views', 'Romantic Setting'],
      reason: 'Wake up to ocean views and barefoot beach walks',
      recommended: true
    },
    {
      name: 'Atithi Homestay, Udupi ',
      location: 'Udupi / Malpe',
      day: 'Day 3 (Optional)',
      rating: '4.6',
      image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1475803040362874598/original/ac770829-2826-41c0-b7ff-3a70360a383e.jpeg?im_w=720',
      features: ['Modern Amenities', 'Near Beach', 'Comfortable'],
      reason: 'If you want to extend your adventure near Malpe',
      recommended: false
    }
  ];

  const bookingTips = [
    'Book accommodations at least 2 weeks in advance, especially for Gokarna beach resorts',
    'Request rooms with a view for special newlywed experience',
    'Check if hotels offer complimentary breakfast to start your day right',
    'Confirm check-in/check-out times to match your itinerary'
  ];

  return (
    <section className="accommodation-section">
      <div className="accommodation-container">
        <div className="accommodation-header">
          <h2 className="accommodation-title">Where You'll Rest</h2>
          <p className="accommodation-description">Carefully selected stays for comfort and romance</p>
        </div>

        <div className="accommodation-grid">
          {accommodations.map((hotel, index) => (
            <Card key={index} className="hotel-card">
              {hotel.recommended && (
                <Badge className="recommended-badge">Recommended</Badge>
              )}
              <div className="hotel-image-wrapper">
                <img src={hotel.image} alt={hotel.name} className="hotel-image" />
                <Badge className="day-badge">{hotel.day}</Badge>
              </div>
              <CardHeader className="hotel-header">
                <h3 className="hotel-name">{hotel.name}</h3>
                <div className="hotel-location">
                  <MapPin size={14} />
                  <span>{hotel.location}</span>
                </div>
                <div className="hotel-rating">
                  <Star size={16} fill="currentColor" />
                  <span>{hotel.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="hotel-content">
                <div className="hotel-features">
                  {hotel.features.map((feature, idx) => (
                    <div key={idx} className="feature-item">
                      <Check size={14} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="hotel-reason">
                  <span className="reason-label">Why we chose this:</span>
                  <p className="reason-text">{hotel.reason}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="booking-tips">
          <h3 className="tips-title">Booking Tips</h3>
          <ul className="tips-list">
            {bookingTips.map((tip, index) => (
              <li key={index} className="tip-item">{tip}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AccommodationSection;