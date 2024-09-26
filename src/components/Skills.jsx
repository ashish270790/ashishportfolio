import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skills = [
    { name: 'HTML5', percentage: 95, barColor: '#33ff77' },
    { name: 'CSS3', percentage: 90, barColor: '#33c3ff' },
    { name: 'JavaScript', percentage: 85, barColor: '#ffcc00' },
    { name: 'React', percentage: 80, barColor: '#ff5733' },
    { name: 'Node.js', percentage: 75, barColor: '#33ffbb' },
    { name: 'Git', percentage: 70, barColor: '#ffbb33' },
  ];

  useEffect(() => {
    gsap.utils.toArray('.progress-wrap').forEach((element) => {
      gsap.fromTo(
        element,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
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
    scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="skills-section">
        <h2 className="d-flex justify-content-center section-title">Skills</h2>
        <p className="d-flex justify-content-center">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia
        </p>
        <h1 className="big-watermark">Skills</h1>
        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6" key={index}>
              <div className="progress-wrap">
                <h3 className='mb-4'>{skill.name}</h3>
                <div className="progress">
                  <div
                    className="progress-bar mb-2"
                    style={{
                      width: `${skill.percentage}%`,
                      backgroundColor: skill.barColor,
                    }}
                  >
                    <span className="percentage-overlay mt-3">
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
