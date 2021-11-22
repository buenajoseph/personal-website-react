import React from "react";
import Sidebar from "../../components/header/Sidebar";
import Hero from "../../components/slider/Hero";
import About from "../../components/about/About";
import Service from "../../components/service/Service";
import Portfolio from "../../components/portfolio/Portfolio";
import Testimonial from "../../components/testimonial/Testimonial";
import Blog from "../../components/blog/Blog";
import Contact from "../../components/Contact";
import Address from "../../components/Address";
import Map from "../../components/Map";

const HomeLight = () => {
  document.body.classList.add("light");
  return (
    <>
      <div className="home-light edina_tm_mainpart">
        <Sidebar />
        {/* End Header */}
        <Hero />
        {/* End Hero */}
        <About />
        {/* End Hero */}

        <div className="edina_tm_services" id="service">
          <div className="container">
            <div className="edina_tm_title">
              <h3>What I Do</h3>
              <p>
                Here are my current interests within software engineering!
              </p>
            </div>
            {/* End edian_tm_title */}
            <Service />
          </div>
        </div>
        {/* End Services */}

        <div className="edina_tm_portfolio" id="portfolio">
          <div className="container">
            <div className="edina_tm_title">
              <h3>Portfolio</h3>
              <p>
                See my CV for more details or reach out if you'd like to learn more!
              </p>
            </div>
            {/* End edian_tm_title */}
            <Portfolio />
          </div>
        </div>
        {/* End Portfolio */}

        <div className="edina_tm_contact" id="contact">
          <div className="container">
            <div className="edina_tm_title">
              <h3>Contact Me!</h3>
            </div>
            <div className="extra_info">
              <Address />
            </div>
            {/* End Address Info */}
            <div className="mainpart">
              <div
                className="left"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="title">
                  <p>
                    <span>Send me a message!</span>
                  </p>
                </div>
                {/* End title */}
                <div className="fields">
                  <Contact />
                </div>
                {/* End Contact Form */}
              </div>
              <div
                className="right"
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <Map />
              </div>
              {/* End Map */}
            </div>
          </div>
        </div>
        {/* /CONTACT */}
      </div>
    </>
  );
};

export default HomeLight;
