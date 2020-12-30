import React from "react";
import styles from "./AboutPage.module.scss";

import AboutUs from "./AboutUs/AboutUs.js";

import Profiles from "../../../constants/Profiles.js";
import emailIcon from "../../../assets/icons/email-logo.svg";
import githubIcon from "../../../assets/icons/github-logo.svg";
import linkedinIcon from "../../../assets/icons/linkedin-logo.svg";
import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";
import Aux from "../../../hoc/auxilary";

class AboutPage extends React.Component {
  render() {
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

    return (
      <Aux>
        <NavBarWSeachbar isSearchBarHidden={true} />
        <div className={styles.content}>
          <AboutUs />
          <div className={styles.team}>{TEAM}</div>
        </div>
      </Aux>
    );
  }
}

export default AboutPage;
