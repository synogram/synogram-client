import Profiles from "../../../../constants/Profiles.js";
import styles from "./TeamProfile.module.scss";
import Aux from "../../../../hoc/auxilary.js";

import emailIcon from "../../../../assets/icons/email-logo.svg";
import githubIcon from "../../../../assets/icons/github-logo.svg";
import linkedinIcon from "../../../../assets/icons/linkedin-logo.svg";

import React from "react";

const teamProfile = () => {
  const TEAM = Profiles.map((teamMember, index) => {
    return (
      <div
        className={styles.magnifyGlassContainer}
        key={teamMember.name + index}
      >
        <div className={styles.magnifyGlass}>
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="test"
            className={styles.imgAvatar}
          ></img>
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
          <div className={styles.magnifyGlassHandle}></div>
        </div>
        <div className={styles.teamMemberInfo}>
          <h4>{teamMember.name}</h4>
          <p>{teamMember.description}</p>
        </div>
      </div>
    );
  });

  return <div className={styles.team}>{TEAM}</div>;
};

export default teamProfile;
