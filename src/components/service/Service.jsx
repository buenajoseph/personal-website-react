import React, { useState } from "react";
import Modal from "react-modal";
import Tilt from "react-parallax-tilt";

Modal.setAppElement("#root");

const Service = () => {

  return (
    <div className="service_list">
      <ul>
        {/* Start S1 */}
        <li data-aos="fade-right" data-aos-duration="1200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/svg/1.svg" alt="" />
                <div className="service_title">
                  <h3>Data Engineering</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End S1 */}

        {/* Start S2 */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="100">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/svg/2.svg" alt="" />
                <div className="service_title">
                  <h3>Backend Engineering</h3>
                </div>
              </div>
            </div>{" "}
          </Tilt>
        </li>
        {/* End S2 */}

        {/* Start S3 */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/svg/4.svg" alt="" />
                <div className="service_title">
                  <h3>Test Software &amp; QA</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End S3 */}

        {/* Start S4 */}
        <li data-aos="fade-right" data-aos-duration="1200" data-aos-delay="300">
          <Tilt>
            <div className="list_inner">
              <div className="hover">
                <img className="svg custom" src="img/svg/3.svg" alt="" />
                <div className="service_title">
                  <h3>Full-Stack Engineering</h3>
                </div>
              </div>
            </div>
          </Tilt>
        </li>
        {/* End S4 */}
      </ul>
    </div>
  );
};

export default Service;
