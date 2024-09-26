import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    // GSAP animation for the image grow effect
    gsap.utils.toArray('.projects-img').forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects-section" id="projects-section">
      <div className="container">
        <div className="heading-section">
          <h1 className="projects-watermark">Projects</h1>
          <h2 className="projects-title section-title">Our Projects</h2>
          <p className="projects-description text-white">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="projects-collage">
          {/* First Row: Small Left, Large Right */}
          <div className="row-layout">
            <div className="project-item small-image">
              <img src="/images/project-4.jpg" alt="Branding & Illustration Design" className="projects-img" />
              <div className="overlay">
                <div className="overlay-text">Branding & Illustration Design</div>
              </div>
            </div>
            <div className="project-item large-image">
              <img src="/images/project-5.jpg" alt="Development & Design" className="projects-img" />
              <div className="overlay">
                <div className="overlay-text">Development & Design</div>
              </div>
            </div>
          </div>

          {/* Second Row: Large Left, Small Right */}
          <div className="row-layout">
            <div className="project-item large-image">
              <img src="/images/project-4.jpg" alt="Marketing Strategy" className="projects-img" />
              <div className="overlay">
                <div className="overlay-text">Marketing Strategy</div>
              </div>
            </div>
            <div className="project-item small-image">
              <img src="/images/project-6.jpg" alt="UI/UX Design" className="projects-img" />
              <div className="overlay">
                <div className="overlay-text">UI/UX Design</div>
              </div>
            </div>
          </div>

          {/* Third Row: Small Left, Large Right */}
          <div className="row-layout">
            <div className="project-item small-image">
              <img src="/images/project-2.jpg" alt="E-Commerce Design" className="projects-img" />
              <div className="overlay">
                <div className="overlay-text">E-Commerce Design</div>
              </div>
            </div>
            <div className="project-item large-image">
              <img src="/images/project-3.jpg" alt="Social Media Strategy" className="projects-img" />
              <div className="overlay">
                <div className="overlay-text">Social Media Strategy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
