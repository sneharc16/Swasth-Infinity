// App.js
import React, { useEffect } from 'react';
import Navbar from '../Navbar/navbar';

const Shefit = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    document.body.appendChild(script);
    
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
    };

    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="index-page">
        <Navbar/>
      <header className="header d-flex align-items-center sticky-top">
        <div className="container position-relative d-flex align-items-center justify-content-between">
          <nav className="navmenu">
            <ul>
              <li><a href="/">Back to Home</a></li>
              <li><a href="#hero">Swasth Mumma</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#Creators">Schedule your Appointment</a></li>
              <li><a href="https://www.google.com/maps/search/gynecologist+near+me">Nearby Gynecologist</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="main">
        <section id="hero" className="hero section light-background">
          <div className="container">
            <div className="row gy-4 justify-content-center justify-content-lg-between">
              <div className="col-lg-5 order-2 order-lg-1">
                <h1>Pregnancy is a life-changing journey</h1>
                <p>Enjoy this journey with nurturing yourself and self-care</p>
                <div>
                  <a href="#login" className="btn-get-started">Get Started</a>
                </div>
              </div>
              <div className="col-lg-5 order-1 order-lg-2 hero-img">
                <img src="assets/img/new.png" alt="Hero" className="img-fluid animated" />
              </div>
            </div>
          </div>
        </section>

        {/* Additional sections */}
      </main>

      <div id="translate-container">
        <div id="google_translate_element"></div>
      </div>
    </div>
  );
};

export default Shefit;
