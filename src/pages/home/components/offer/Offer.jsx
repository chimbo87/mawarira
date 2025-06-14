import React, { useState, useEffect } from 'react';
import { Star, Users, Award, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import './Offer.css'

function Offer() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [stats, setStats] = useState({
      clients: 0,
      staff: 0,
      events: 0,
      satisfaction: 0
    });
    const whyChooseUs = [
        {
          title: "Vetted Professionals",
          description: "All staff undergo thorough background checks and skill assessments",
          icon: <CheckCircle className="w-8 h-8" />
        },
        {
          title: "24/7 Support",
          description: "Round-the-clock customer service and emergency support",
          icon: <Clock className="w-8 h-8" />
        },
        {
          title: "Flexible Scheduling",
          description: "Last-minute bookings and flexible staffing solutions",
          icon: <Users className="w-8 h-8" />
        },
        {
          title: "Quality Guarantee",
          description: "100% satisfaction guarantee or we'll make it right",
          icon: <Award className="w-8 h-8" />
        }
      ];
  return (
    <section className="why-choose-us">
    <div className="container">
      <div className="section-header">
        <h2>Why Choose Us</h2>
        <p>What sets us apart in hospitality staffing</p>
      </div>
      <div className="features-grid">
        {whyChooseUs.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Offer
