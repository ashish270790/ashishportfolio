import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import '../Style.css';

function Footer() {
  useEffect(() => {
    // GSAP animations for footer elements with consistent grow and fade-in effect
    gsap.fromTo(".footer-section",
      { y: 50, opacity: 0 }, // Start state
      {
        duration: 1,
        scale: 1, // Target state
        opacity: 1,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: '.profile-image',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    
    gsap.fromTo(".footer-social-icons a",
      { y: 50, opacity: 0 }, // Start state
      {
        duration: 1,
        scale: 1, // Target state
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.profile-image',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(".footer-bottom",
      { y: 50, opacity: 0 }, // Start state
      {
        duration: 1,
        scale: 1, // Target state
        opacity: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.profile-image',
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <footer className="footer-container ">
      <div className="footer-content p-2 mb-4">
        <div className="footer-section">
          <h2 className="footer-heading">About</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          <ul className="footer-social-icons list-unstyled">
            <li><a href="#"><i className="bi bi-twitter"></i></a></li>
            <li><a href="#"><i className="bi bi-facebook"></i></a></li>
            <li><a href="#"><i className="bi bi-instagram"></i></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Links</h2>
          <ul className="footer-links list-unstyled">
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Home</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> About</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Services</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Projects</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Services</h2>
          <ul className="footer-links list-unstyled">
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Web Design</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Web Development</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Business Strategy</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Data Analysis</a></li>
            <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Graphic Design</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h2 className="footer-heading">Have Questions?</h2>
          <ul className="footer-contact list-unstyled">
            <li><i className="bi bi-geo-alt"></i> <span>203 Fake St. Mountain View, Pune, California, India</span></li>
            <li><a href="#"><i className="bi bi-phone"></i> <span>+2 392 3929 210</span></a></li>
            <li><a href="#"><i className="bi bi-envelope"></i> <span>info@yourdomain.com</span></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom text-center ">
        <p className='mb-5'>
          &copy; {new Date().getFullYear()} All rights reserved | Made with <i className="bi bi-heart-fill text-danger" aria-hidden="true"></i> by <a href="" target="_blank" rel="noopener noreferrer">portfolio</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
