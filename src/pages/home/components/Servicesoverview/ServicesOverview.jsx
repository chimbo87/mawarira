import React, { useState, useEffect } from 'react';
import { Star, Users, Award, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import './ServicesOverview.css'

function ServicesOverview() {
    const services = [
        {
          title: "Wait Staff",
          description: "Professional servers for all dining experiences",
          icon: "👨‍🍳"
        },
        {
          title: "Chefs",
          description: "Experienced culinary professionals",
          icon: "👩‍🍳"
        },
        {
          title: "Mixologists",
          description: "Expert cocktail creators and beverage specialists",
          icon: "🍸"
        },
        {
          title: "Bartenders",
          description: "Skilled bar professionals for any event",
          icon: "🍺"
        },
        {
          title: "Event Coordinators",
          description: "Seamless event management professionals",
          icon: "📋"
        },
        {
          title: "Catering Staff",
          description: "Complete catering service teams",
          icon: "🍽️"
        }
      ];
  return (
    <section className="services-overview">
    <div className="container">
      <div className="section-header">
        <h2>Our Services</h2>
        <p>Professional hospitality staff for every occasion</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="service-btn">Learn More <ArrowRight className="w-4 h-4" /></button>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ServicesOverview
