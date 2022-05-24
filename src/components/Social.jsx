import React from "react";
import {
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

const SocialShare = [
  { iconName: <FiGithub />, link: "https://github.com/buenajoseph" },
  {
    iconName: <FiLinkedin />,
    link: "https://www.linkedin.com/in/buenajosepht/",
  },
];
const Social = () => {
  return (
    <ul>
      {SocialShare.map((val, i) => (
        <li key={i}>
          <a href={val.link} target="_blank" rel="noreferrer">
            {val.iconName}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Social;
