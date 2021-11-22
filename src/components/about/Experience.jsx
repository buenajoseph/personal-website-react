import React from "react";

const experienceContent = [
  {
    year: "2021",
    position: "Web App Developer (unofficial)",
    compnayName: "Doneboard",
    details: `Bubble.io developer of an inventory management web application - responsible for automation and feature requests`,
  },
  {
    year: "2021",
    position: "Builds Technician Lead",
    compnayName: "Doneboard",
    details: `Lead Technician of a team of 5 technicians`,
  },
  {
    year: "2020 - 2021",
    position: "Computer Builds Technician",
    compnayName: "Kinetix Technology Services",
    details: `IT MSP Builds Technician for over 30 clients`,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
