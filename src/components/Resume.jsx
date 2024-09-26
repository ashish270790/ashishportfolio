import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Resume() {
  useEffect(() => {
    // GSAP animation for the grow effect
    gsap.utils.toArray('.resume-wrap').forEach((element) => {
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
    scrollTo(0,0)
  }, [])

  return (
    <>
      <section className="custom-section custom-no-pb overflow-hidden  py-4" id="resume-section ">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-10 heading-section text-center custom-animate ">
               <div className="resume-watermark  ">Resume</div>
              <h2 className="big big-2 section-title  ">Resume</h2>
              <p className="text-white">
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>

          {/* Watermark */}

          <div className="row">
            <div className="col-md-6">
              <div className="resume-card">
                <div className="resume-wrap custom-animate">
                  <span className="date text-white">2014-2015</span>
                  <h2 className="text-white">Master Degree of Design</h2>
                  <span className="position text-white">Cambridge University</span>
                  <p className="mt-4 text-white">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-wrap custom-animate">
                  <span className="date text-white">2014-2015</span>
                  <h2 className="text-white">Bachelor's Degree of C.A</h2>
                  <span className="position text-white">Cambridge University</span>
                  <p className="mt-4 text-white">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-wrap custom-animate">
                  <span className="date text-white">2014-2015</span>
                  <h2 className="text-white">Diploma in Computer</h2>
                  <span className="position text-white">Cambridge University</span>
                  <p className="mt-4 text-white">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="resume-card">
                <div className="resume-wrap custom-animate">
                  <span className="date text-white">2014-2015</span>
                  <h2 className="text-white">Art &amp; Creative Director</h2>
                  <span className="position text-white">Cambridge University</span>
                  <p className="mt-4 text-white">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-wrap custom-animate">
                  <span className="date text-white">2014-2015</span>
                  <h2 className="text-white">Wordpress Developer</h2>
                  <span className="position text-white">Cambridge University</span>
                  <p className="mt-4 text-white">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
              <div className="resume-card">
                <div className="resume-wrap custom-animate">
                  <span className="date text-white">2017-2018</span>
                  <h2 className="text-white">UI/UX Designer</h2>
                  <span className="position text-white">Cambridge University</span>
                  <p className="mt-4 text-white">
                    A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-2">
            <div className="col-md-6 text-center custom-animate">
              <p>
                <span  className="btn download-btn ">Download CV</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Resume;
