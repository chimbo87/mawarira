import React, { useState, useEffect } from 'react';
import { Star, Users, Award, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import './FeaturedStaff.css';

function FeaturedStaff() {
    const featuredStaff = [
        {
          name: "Marcus Rodriguez",
          role: "Head Chef",
          experience: "15+ years",
          specialties: ["Fine Dining", "Italian Cuisine", "Event Catering"],
          image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=300&h=400&fit=crop&crop=face"
        },
        {
          name: "Sarah Chen",
          role: "Mixologist",
          experience: "8+ years",
          specialties: ["Craft Cocktails", "Wine Pairing", "Corporate Events"],
          image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
          name: "David Thompson",
          role: "Senior Waiter",
          experience: "12+ years",
          specialties: ["Fine Dining", "Wedding Service", "VIP Events"],
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face"
        }
      ];
    
  
  return (
    <section className="featured-staff">
    <div className="container">
      <div className="section-header">
        <h2>Featured Staff</h2>
        <p>Meet some of our top-rated professionals</p>
      </div>
      <div className="staff-grid">
        {featuredStaff.map((staff, index) => (
          <div key={index} className="staff-card">
            <div className="staff-image">
              <img src={staff.image} alt={staff.name} />
            </div>
            <div className="staff-info">
              <h3>{staff.name}</h3>
              <p className="staff-role">{staff.role}</p>
              <p className="staff-experience">{staff.experience} Experience</p>
              <div className="staff-specialties">
                {staff.specialties.map((specialty, idx) => (
                  <span key={idx} className="specialty-tag">{specialty}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default FeaturedStaff
