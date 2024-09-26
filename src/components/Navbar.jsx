import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {

  useEffect(() => {
    scrollTo(0,0)
  }, [])
  return (
    <>
      <nav className="navbar custom-navbar navbar-expand-lg shadow-lg fixed-top mb-5">
        <div className="container-fluid">
          {/* Left Section: Name/Logo */}
          <NavLink to='/' className="custom-navbar-brand text-decoration-none">
            <span className="website-name custom-navbar-brand animate__animated animate__fadeInLeft mb-2 text-decoration-none mx-2">
              Ashish Sharma
            </span> 
          </NavLink>

          {/* Navbar Toggler for Mobile View */}
          <button 
            className="custom-navbar-toggler d-lg-none me-1 mb-2 fst-white" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#customNavbarContent" 
            aria-controls="customNavbarContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse animate__animated animate__fadeInRight" id="customNavbarContent">
            <ul className="custom-navbar-nav ms-auto">
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/">
                <i className="bi bi-house-down"></i> Home
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/about">
                <i className="fa-regular fa-address-card"></i> About
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/resume">
                  <i className="bi bi-file-earmark-text"></i> Resume
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/services">
                <i className="fa-solid fa-list"></i> Services
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/skills">
                <i className="fa-brands fa-usps"></i> Skills
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/project">
                  <i className="bi bi-palette"></i> Project
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/blog">
                  <i className="bi bi-journal-text"></i> My Blog
                </NavLink>
              </li>
              <li className="custom-nav-item">
                <NavLink className="custom-nav-link animate__animated animate__fadeInUp" to="/contact">
                  <i className="bi bi-envelope"></i> Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='' style={{marginTop:'11vh'}}></div>
      
    </>
  );
}

export default Navbar;
