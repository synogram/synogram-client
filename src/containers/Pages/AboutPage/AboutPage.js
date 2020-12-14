import React from "react";
import styles from "./AboutPage.module.scss";
import MESSAGE from "../../../constants/Messages";
import Profiles from "../../../constants/Profiles.js";

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

    const TEAM = Profiles.map((teamMember) => {
      console.log(teamMember);
      return (
        <div className={styles.magnifyGlassContainer}>
          <div className={styles.magnifyGlass}>
            <img
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="test"
              className={styles.imgAvatar}
            ></img>
          </div>
          <div className={styles.magnifyGlassHandle}></div>
          <h4>{teamMember.name}</h4>
          <p>{teamMember.description}</p>
        </div>
      );
    });

    return (
      <div className={styles.content}>
        {ABOUT_US}
        <div className={styles.team}>{TEAM}</div>
      </div>
    );
  }
}

export default AboutPage;
