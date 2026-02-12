import React from 'react';
import { MapPin, Coffee, Waves, Palmtree } from 'lucide-react';
import '../styles/JourneySection.css';

const JourneySection = () => {
  const journeyData = [
    {
      day: 1,
      title: 'Day 1: Temples + Western Ghats Calm(21st March)',
      subtitle: 'Peaceful beginnings in sacred spaces',
      route: 'Bengaluru → Horanadu → Sringeri',
      color: 'day-1',
      activities: [
        { icon: MapPin, time: '6:00 AM', text: 'Early start from Bengaluru' },
        { icon: Coffee, time: '10:00 AM', text: 'Darshan at Horanadu Temple' },
        { icon: MapPin, time: '2:00 PM', text: 'Drive to Sringeri through Western Ghats' },
        { icon: Waves, time: '6:00 PM', text: 'Evening river walk & rest' }
      ],
      stay: 'Stay: Sringeri / Agumbe',
      note: "This day is peaceful so you're fresh for adventure next day"
    },
    {
      day: 2,
      title: 'Day 2: Backwaters + Shiva + Beach Vibes(22nd March)',
      subtitle: 'From holy waters to ocean shores',
      route: 'Sringeri → Siganduru → Murudeshwara → Gokarna',
      color: 'day-2',
      activities: [
        { icon: Waves, time: '8:00 AM', text: 'Ferry boat at Siganduru - Very scenic & romantic' },
        { icon: Coffee, time: '12:00 PM', text: 'Murudeshwara Temple + optional banana ride/jet ski' },
        { icon: Palmtree, time: '4:00 PM', text: 'Reach Gokarna' },
        { icon: Waves, time: '6:00 PM', text: 'Chill at Om/Kudle Beach - sunset, barefoot walks, dinner' }
      ],
      stay: 'Stay: Gokarna',
      note: 'No heavy activities—just romance and relaxation'
    },
    {
      day: 3,
      title: 'Day 3: FULL BEACH ADVENTURE DAY(23rd March',
      subtitle: 'Water sports, island hopping & memories',
      route: 'Gokarna → Udupi → Malpe → Bengaluru',
      color: 'day-3',
      activities: [
        { icon: MapPin, time: '7:00 AM', text: 'Early drive to Udupi' },
        { icon: Coffee, time: '9:00 AM', text: 'Quick darshan at Krishna Math' },
        { icon: Waves, time: '11:00 AM - 4:00 PM', text: 'MAIN ADVENTURE: Banana Ride, Jet Ski, Parasailing, Speed Boat' },
        { icon: Palmtree, time: '2:00 PM', text: "Boat to St Mary's Island - Blue water, white rocks, insane photos" },
        { icon: MapPin, time: '5:00 PM', text: 'Start return to Bengaluru' }
      ],
      stay: 'Stay: Late-night arrival in Bengaluru',
      
    }
  ];

  return (
    <section id="journey-section" className="journey-section">
      <div className="journey-container">
        <div className="journey-header">
          <h2 className="journey-title">Your Journey Unfolds</h2>
          <p className="journey-description">Three days of adventure, romance, and unforgettable moments</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line" />
          {journeyData.map((day, index) => (
            <div key={day.day} className={`day-card ${day.color}`}>
              <div className="day-content">
                <div className="day-number-badge">
                  <span>{day.day}</span>
                </div>
                <h3 className="day-title">{day.title}</h3>
                <p className="day-subtitle">{day.subtitle}</p>
                <div className="day-route">
                  <MapPin size={16} />
                  <span>{day.route}</span>
                </div>
                <div className="day-activities">
                  {day.activities.map((activity, idx) => {
                    const Icon = activity.icon;
                    return (
                      <div key={idx} className="activity-item">
                        <Icon size={16} className="activity-icon" />
                        <div className="activity-details">
                          <span className="activity-text">{activity.text}</span>
                          <span className="activity-time">{activity.time}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="day-stay">
                  <span className="stay-label">{day.stay}</span>
                </div>
                <p className="day-note">{day.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;