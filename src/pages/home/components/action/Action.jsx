import React from 'react';
import './Action.css'
import { Star, Users, Award, Clock, CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';

function Action() {
  return (
    <section className="call-to-action">
    <div className="container">
      <div className="cta-content">
        <h2>Ready to Elevate Your Service?</h2>
        <p>Get matched with professional hospitality staff in minutes. Quality guaranteed.</p>
        <div className="cta-buttons">
          <button className="btn-primary">
            <Phone className="w-5 h-5" />
            Call Now: (555) 123-4567
          </button>
          <button className="btn-secondary">
            <Mail className="w-5 h-5" />
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Action