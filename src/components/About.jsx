import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WOW from 'wowjs';
import 'animate.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      mobile: true,
      live: true,
    });
    wow.init();

    gsap.fromTo('.profile-image', { scale: 0.5, opacity: 0 }, {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.profile-image',
        start: 'top 130%',
        toggleActions: 'play none none reverse',
      },
    });

    gsap.fromTo('.about-info', { scale: 0.5, opacity: 0 }, {
      duration: 1,
      scale: 1,
      opacity: 1,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: '.about-info',
        start: 'top 130%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  return (
    <section id="about" className="about-section  mb-2">
      <div className="watermark">About</div> {/* Watermark */}
      <div className="container about-content">
        <h2 className="text-center">About Me</h2> {/* Centered Heading */}
        <p className="description wow fadeInUp" data-wow-delay="0.9s">
              A small river named Duden flows by their place and supplies it with the necessary regelialia.
            </p>
        <div className="row d-flex justify-content-center  align-items-center mt-5">
          <div className="col-lg-6">
            <img
              src="/images/ph4.jpg"
              alt="Profile"
              className="profile-image wow fadeInLeft"
              data-wow-duration="1.5s"
              data-wow-delay="0.5s"
            />
          </div>
          <div className="col-lg-6 about-info wow fadeInRight" data-wow-duration="1.5s" data-wow-delay="0.5s">            
            <ul className="info-list">
              <li className="wow fadeInUp" data-wow-delay="1.1s"><strong>Name:</strong> Ashish Sharma</li>
              <li className="wow fadeInUp" data-wow-delay="1.2s"><strong>Date of Birth:</strong> January 01, 1987</li>
              <li className="wow fadeInUp" data-wow-delay="1.3s"><strong>Address:</strong> Pune CA 97987 India</li>
              <li className="wow fadeInUp" data-wow-delay="1.4s"><strong>Zip Code:</strong> 1000</li>
              <li className="wow fadeInUp" data-wow-delay="1.5s"><strong>Email:</strong> jitz7788@gmail.com</li>
              <li className="wow fadeInUp" data-wow-delay="1.6s"><strong>Phone:</strong> +1-2234-5678-9-0</li>
            </ul>
            <p className="projects-completed wow fadeInUp mb-3" data-wow-delay="1.7s">120 Projects completed</p>
            <a href="#" className="btn btn-light download-btn wow fadeInUp mb-5" data-wow-delay="1.8s">Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
