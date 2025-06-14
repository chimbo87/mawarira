import React, { useState, useEffect } from 'react';
import './StatsCounter.css';
import { FaUsers, FaCalendarAlt, FaUtensils, FaSmile } from 'react-icons/fa';

const StatsCounter = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0, target: 1250, text: "Happy Clients", icon: <FaUsers /> },
    { id: 2, value: 0, target: 850, text: "Events Catered", icon: <FaCalendarAlt /> },
    { id: 3, value: 0, target: 5000, text: "Meals Served", icon: <FaUtensils /> },
    { id: 4, value: 0, target: 100, text: "Professional Staff", icon: <FaSmile /> }
  ]);

  useEffect(() => {
    const duration = 2000; // Animation duration in ms
    const interval = 50; // Update interval in ms
    const steps = duration / interval;
    
    counters.forEach((counter, index) => {
      const increment = counter.target / steps;
      const timer = setInterval(() => {
        setCounters(prevCounters => {
          const newCounters = [...prevCounters];
          if (newCounters[index].value < counter.target) {
            newCounters[index].value = Math.ceil(newCounters[index].value + increment);
          } else {
            newCounters[index].value = counter.target;
            clearInterval(timer);
          }
          return newCounters;
        });
      }, interval);
      
      return () => clearInterval(timer);
    });
  }, []);

  return (
    <section className="stats-counter">
      <div className="container">
        <div className="stats-grid">
          {counters.map((stat) => (
            <div key={stat.id} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <span className="stat-number">{stat.value}+</span>
                <span className="stat-text">{stat.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;