import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faCamera, faCode, faMobileAlt, faPaintBrush, faChartLine, faHammer, faMusic } from "@fortawesome/free-solid-svg-icons";

gsap.registerPlugin(ScrollTrigger);



const services = [
  { icon: faDesktop, title: "WEB DESIGN" },
  { icon: faCamera, title: "PHOTOGRAPHY" },
  { icon: faCode, title: "WEB DEVELOPER" },
  { icon: faMobileAlt, title: "APP DEVELOPING" },
  { icon: faPaintBrush, title: "BRANDING" },
  { icon: faChartLine, title: "PRODUCT STRATEGY" },
  { icon: faHammer, title: "CONSTRUCTION" },  // New profession with a different icon
  { icon: faMusic, title: "MUSIC PRODUCTION" } // Another new profession with a different icon
];


const Services = () => { 
  useEffect(() => {
    // GSAP animation for the grow effect
    gsap.utils.toArray('.service-card').forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    scrollTo(0,0)
  }, [])

  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-subtitle text-white">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          <div className="watermark" style={{color:'white'}}>Services</div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <FontAwesomeIcon icon={service.icon} className="service-icon" />
              <h3>{service.title}</h3>
              <h6>___</h6>
            </div>
          ))}
        </div>
      </div>
      
    </section>
  );
};

export default Services;