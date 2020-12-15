import React from "react";
import styles from "./AboutPage.module.scss";
import MESSAGE from "../../../constants/Messages";
import Profiles from "../../../constants/Profiles.js";
import emailIcon from "../../../assets/icons/email-logo.svg";
import githubIcon from "../../../assets/icons/github-logo.svg";
import linkedinIcon from "../../../assets/icons/linkedin-logo.svg";
import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";
import Aux from "../../../hoc/auxilary";

class AboutPage extends React.Component {
  render() {
    const ABOUT_US = (
      <div className={styles.aboutUs}>
        <h1>{MESSAGE.about_page_title}</h1>
        <h2>{MESSAGE.about_page_subtitle}</h2>
        <p>{MESSAGE.about_page_description1}</p>
        <p>{MESSAGE.about_page_description2}</p>
      </div>
    );

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
        <NavBarWSeachbar searchBarHidden={true} />
        <div className={styles.content}>
          {ABOUT_US}
          <div className={styles.team}>{TEAM}</div>
        </div>
      </Aux>
    );
  }
}

export default AboutPage;
