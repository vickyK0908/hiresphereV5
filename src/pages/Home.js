import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim() !== '') {
      setSubmitted(true);
    }
  };

  const stats = [
    { label: 'Active Jobs', value: '12,000+' },
    { label: 'Companies', value: '3,400+' },
    { label: 'Hired This Month', value: '890+' },
  ];

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">🌐 Your Career Starts Here</span>
          <h1 className="hero-title">
            Find Your <span className="highlight">Dream Job</span><br />
            with HireSphere
          </h1>
          <p className="hero-sub">
            Thousands of opportunities from top companies, all in one place.
            No noise, just the right jobs for you.
          </p>
          <Link to="/browse" className="cta-btn">Browse Jobs →</Link>
        </div>
      </section>

      <section className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </section>

      <section className="newsletter-section">
        <h2 className="section-title">Get Job Alerts</h2>
        <p className="section-sub">Subscribe and receive job updates straight to your inbox.</p>

        {submitted ? (
          <p className="success-msg">✅ You're subscribed! We'll keep you posted.</p>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              className="email-input"
              placeholder="Enter your email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="subscribe-btn">Subscribe</button>
          </form>
        )}
      </section>
    </main>
  );
}

export default Home;
