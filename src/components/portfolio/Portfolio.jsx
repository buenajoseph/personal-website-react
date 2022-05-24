import React from "react";
import ReactTooltip from "react-tooltip";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => {
  var settings = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrow: false,
          autoplay: false,
          draggable: true,
          speed: 300,
          dots: true,
        },
      },
    ],
  };

  // const modalData = [
  //   {
  //     title: "Professional Experience",
  //     data: [
  //       {
  //         jobTitle: "Doneboard - Computer Builds Technician",
  //         jobPoints: [
  //           "•	Facilitated over 50 internal process changes using documentation and process improvement proposals.",
  //           "•	Maintained data and inventory of over 2000 devices through a custom inventory management web application.",
  //           "•	Organized weekly check-ins, meetings, and support coverage to ensure a team of 4’s success and happiness"
  //         ]
  //       }
  //     ]
  //   },
  //   {

  //   },

  // ]

  return (
    <div className="portfolio_inner my_carousel gallery_zoom">
      <ul data-aos="fade-right" data-aos-duration="1200">
        <Slider {...settings}>
          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.linkedin.com/in/buenajosepht/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/Pers/tank.png"
                    data-tip
                    data-for="product"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="product"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Academic Projects</h5>
                      <span>SF State</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://www.linkedin.com/in/buenajosepht/"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/Pers/db.png"
                    data-tip
                    data-for="dribbble"
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="dribbble"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Professional Experience</h5>
                      <span>Work</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

          <li>
            <div className="list_inner">
              <div className="image">
                <a
                  href="https://github.com/buenajoseph"
                  target="_blank"
                  rel="noreferrer"
                  className="details"
                >
                  <img
                    src="img/Pers/generic.png"
                    data-tip
                    data-for=""
                    alt="portfolio"
                  />
                  <ReactTooltip
                    id="facebook"
                    place="bottom"
                    type="light"
                    effect="float"
                    className="tooltip-wrapper"
                  >
                    <div>
                      <h5>Personal Projects</h5>
                      <span>Projects</span>
                    </div>
                  </ReactTooltip>
                </a>
              </div>
            </div>
          </li>
          {/* End li */}

        </Slider>
      </ul>
    </div>
  );
};

export default Portfolio;
