import React from "react";
import styles from "./TeamProfileLinks.module.scss";

import emailIcon from "../../../assets/icons/email-logo.svg";
import githubIcon from "../../../assets/icons/github-logo.svg";
import linkedinIcon from "../../../assets/icons/linkedin-logo.svg";
import {PROFILE} from "../../../constants/Constants";

const TeamProfileLinks = (props) => {
  return (
    <div className={styles.logoAvatarContainer}>
      {props.links[PROFILE.EMAIL] && (
        <a
          href={`mailto:${props.links[PROFILE.EMAIL]}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={emailIcon}
            className={styles.avatarIcon}
            alt="Email Icon"
          ></img>
        </a>
      )}
      {props.links[PROFILE.GITHUB] && (
        <a
          href={props.links[PROFILE.GITHUB]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={githubIcon}
            className={styles.avatarIcon}
            alt="Github Icon"
          ></img>
        </a>
      )}
      {props.links[PROFILE.LINKEDIN] && (
        <a
          href={props.links[PROFILE.LINKEDIN]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedinIcon}
            className={styles.avatarIcon}
            alt="LinkedIn Icon"
          ></img>
        </a>
      )}
    </div>
  );
};

export default TeamProfileLinks;
