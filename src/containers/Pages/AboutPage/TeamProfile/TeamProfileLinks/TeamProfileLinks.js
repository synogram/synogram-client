import React from "react";
import styles from "./TeamProfileLinks.module.scss";

import emailIcon from "../../../../../assets/icons/email-logo.svg";
import githubIcon from "../../../../../assets/icons/github-logo.svg";
import linkedinIcon from "../../../../../assets/icons/linkedin-logo.svg";

const TeamProfileLinks = () => {
  return (
    <div className={styles.logoAvatarContainer}>
      <a href="https://google.ca">
        <img
          src={emailIcon}
          className={styles.avatarIcon}
          alt="Email Icon"
        ></img>
      </a>
      <a href="https://google.ca">
        <img
          src={githubIcon}
          className={styles.avatarIcon}
          alt="Github Icon"
        ></img>
      </a>
      <a href="https://google.ca">
        <img
          src={linkedinIcon}
          className={styles.avatarIcon}
          alt="LinkedIn Icon"
        ></img>
      </a>
    </div>
  );
};

export default TeamProfileLinks;
