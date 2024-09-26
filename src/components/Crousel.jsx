import React, { useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { gsap } from 'gsap';



function Crousel() {
  const imageRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const onMouseMove = (e) => {
      // Update cursor bubble position
      gsap.to(cursorRef.current, {
        x: e.clientX - 0,
        y: e.clientY - 0,
        duration: 0.1,
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, { opacity: 0.5, duration: 6 });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, { opacity: 1, duration: 6 });
  };
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="cursor-bubble bg-danger" ref={cursorRef}></div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./images/ph1.jpg" className="d-block w-100 crousel-image" alt="Slide 1" 
           ref={imageRef}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}/>
          <div className="crousel-text p-3">
        <h1 className="crousel-heading text-warning fw-bold">Hello</h1>
        <h1 className="crousel-heading text-warning">Welcome!</h1>
        <div className="crousel-description">
          <Typewriter
            options={{
              strings: [
                'Hi, I am a Software Developer',
                'Good at Web Development',
                'Proficient in Frontend and Backend',
                'Recent Internship in MERN Stack',
                'Familiar with Core Java and Spring Boot',
                'Well-versed with SQL and MongoDB Databases'
              ],
              autoStart: true,
              loop: true,
              delay: 50,
              cursor: '|'
            }}
          />
        </div>
      </div>
        </div>
        <div className="carousel-item">
          <img src="./images/ph2.jpg" className="d-block w-100 crousel-image" alt="Slide 2"
           ref={imageRef}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave} />
          <div className="crousel-text p-3">
            <h1 className="crousel-heading text-warning fw-bold">Explore More!</h1>
            <div className="crousel-description">
              <Typewriter
                options={{
                  strings: [
                    'Creating Interactive UI',
                    'Building Full-Stack Applications',
                    'Passionate about Learning New Technologies',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  cursor: '|',
                }}
              />
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./images/ph4.jpg" className="d-block w-100 crousel-image" alt="Slide 3"
           ref={imageRef}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave} />
          <div className="crousel-text p-3">
            <h1 className="crousel-heading text-warning fw-bold">Stay Tuned!</h1>
            <div className="crousel-description">
              <Typewriter
                options={{
                  strings: [
                    'Ready to take on new challenges!',
                    'Let’s build something great together!',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  cursor: '|',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon mb-5" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon mb-5" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Crousel;
