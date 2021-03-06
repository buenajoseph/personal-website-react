import React from "react";

const skillsContent = [
  {
    name: "Java",
    skillPercent: "90",
  },
  {
    name: "Python",
    skillPercent: "80",
  },
  {
    name: "HTML/CSS/JS/TS",
    skillPercent: "85",
  },
  {
    name: "React",
    skillPercent: "80",
  },
  {
    name: "C++",
    skillPercent: "75",
  },
  {
    name: "C",
    skillPercent: "50",
  },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
