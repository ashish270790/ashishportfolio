import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Contacts = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const form = formRef.current;
    const image = imageRef.current;

    gsap.fromTo(
      section.querySelector('.watermark'),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 0.1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      section.querySelectorAll('.contact-info-item'),
      { y: 50, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      form,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: form,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      image,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: image,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
    scrollTo(0,0)
  }, []);
  
  

  return (
    <section ref={sectionRef} className="contact-section">
      <div className="container">
        <h1 className="contact-heading text-center  position-relative">
          <span className="cont-watermark">Contact</span>
          <h2 className="contact-title section-title">Contact Me</h2>
        <p className=" text-center mb-2 fs-6">
          Feel free to reach out if you'd like to collaborate or have any inquiries!
        </p>
        </h1>

        <div className="row mb-2">
          {['Address', 'Contact Number', 'Email Address', 'Website'].map((item, index) => (
            <div key={index} className="col-md-3 contact-info-item">
              <div className="text-center p-2 shadow-lg  contact-card">
                <i className={`bi ${getIconClass(item)} fs-1 mb-2 text-warning`}></i>
                <h3 className="fs-6 mb-3">{item.toUpperCase()}</h3>
                <p>{getText(item)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="contact-row">
          <div className="contact-image" ref={imageRef}>
            <img
              src="/images/ph2.jpg"
              alt="Contact"
              className="img-fluid image-contact rounded shadow-lg object-fit-cover vh-100"

              
            />
          </div>
          <div className="contact-form-wrapper w-100 " ref={formRef}>
            <form className="contact-form bg-light p-4 p-md-5  rounded shadow-lg">
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Your Name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Your Email" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="mb-3">
                <textarea className="form-control" rows="5" placeholder="Message"></textarea>
              </div>
              <button type="submit" className="btn btn-warning px-4 py-2">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const getIconClass = (item) => {
  switch (item) {
    case 'Address':
      return 'bi-geo-alt';
    case 'Contact Number':
      return 'bi-telephone';
    case 'Email Address':
      return 'bi-envelope';
    case 'Website':
      return 'bi-globe';
    default:
      return '';
  }
};

const getText = (item) => {
  switch (item) {
    case 'Address':
      return '198 West 21th Street, Suite 721 New York NY 10016';
    case 'Contact Number':
      return '+ 1235 2355 98';
    case 'Email Address':
      return 'info@yoursite.com';
    case 'Website':
      return 'yoursite.com';
    default:
      return '';
  }
};

export default Contacts;
