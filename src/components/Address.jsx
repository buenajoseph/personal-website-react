import React from "react";

const Address = () => {
  return (
    <ul className="wrapper">
      <li data-aos="fade-right" data-aos-duration="1200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/phone.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Phone</h3>
            <ul>
              <li>
                <a href="Tel: +15104272571">+1 (510) 427-2571</a>
              </li>
              <li>
                
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/email.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Email</h3>
            <ul>
              <li>
                <a href="mailto:buenajosepht@gmail.com">buenajosepht@gmail.com</a>
              </li>
            </ul>
          </div>{" "}
          {/* End .content */}
        </div>
      </li>
      <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div className="list_inner">
          <div className="icon">
            <img src="img/address/location.png" alt="icon" />
          </div>
          {/* End icon */}
          <div className="content">
            <h3>Location</h3>
            <ul>
              <li>
                <p>
                  SF Bay Area
                </p>
              </li>
            </ul>
          </div>
          {/* End .content */}
        </div>
      </li>
    </ul>
  );
};

export default Address;
