// Home.js
import React, { Component } from 'react'
import Header from './Header'

 import './Home.css'

const HeroSection = () => (
  <section className="hero">
    <h1>Welcome to Field Force Management</h1>
    <p>Empower your team, streamline operations, and boost productivity.</p>
  </section>
);

const Feature = ({ title, description }) => (
  <div className="feature">
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

const FeaturesSection = () => (
  <section className="features">
    <Feature title="Real-time Tracking" description="Track your field force in real-time and optimize their routes for efficient operations." />
    <Feature title="Task Assignment" description="Effortlessly assign tasks to your field agents and monitor task progress." />
    <Feature title="Reporting and Analytics" description="Access comprehensive reports and analytics to make informed business decisions." />
  </section>
);

const Footer = () => (
  <footer className="footer">
    <p>&copy; 2024 Field Force Management. All rights reserved.</p>
  </footer>
);

export default class Home extends Component {

  
  render() {
    return (
      <div>
        <Header/>
        <HeroSection/>
        <FeaturesSection/>
        <Footer/>
       
      </div>
    )
  }
}
