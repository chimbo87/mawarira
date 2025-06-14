import React, { useState, useEffect } from 'react';
import { Star} from 'lucide-react';
import './Testimonials.css';

function Testimonials() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [stats, setStats] = useState({
      clients: 0,
      staff: 0,
      events: 0,
      satisfaction: 0
    });

    useEffect(() => {
        const timer = setInterval(() => {
          setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
      }, []);

      const testimonials = [
        {
          name: "Jennifer Williams",
          company: "Elegant Events Co.",
          text: "The staff provided by this service were absolutely exceptional. Professional, punctual, and went above and beyond our expectations.",
          rating: 5
        },
        {
          name: "Michael Brown",
          company: "Grand Hotel Chain",
          text: "We've been using their services for over two years. Consistently high-quality staff and excellent customer service.",
          rating: 5
        },
        {
          name: "Lisa Rodriguez",
          company: "Corporate Catering LLC",
          text: "Their mixologists transformed our corporate event. Creative cocktails and professional service throughout the evening.",
          rating: 5
        }
      ];
  return (
    <section className="client-testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Trusted by businesses across the industry</p>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 filled" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <strong>{testimonials[currentTestimonial].name}</strong>
                <span>{testimonials[currentTestimonial].company}</span>
              </div>
            </div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}

export default Testimonials
