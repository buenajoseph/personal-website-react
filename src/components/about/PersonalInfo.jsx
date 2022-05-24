import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Joseph Tyler " },
  { meta: "last name", metaInfo: "Buenaventura" },
  { meta: "Age", metaInfo: "22" },
  { meta: "Country", metaInfo: "USA" },
  { meta: "Location", metaInfo: "SF Bay Area" },
  { meta: "phone", metaInfo: "(510)427-2571" },
  { meta: "Email", metaInfo: "buenajosepht@gmail.com" },
  { meta: "Languages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
