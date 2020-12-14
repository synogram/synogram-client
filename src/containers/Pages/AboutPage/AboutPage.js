import React from "react";
import styles from "./AboutPage.module.scss";
import MESSAGE from "../../../constants/Messages";

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
    return (
      <div className={styles.content}>
        {ABOUT_US}
        <div className={styles.team}>
          <div className={styles.magnifyGlassContainer}>
            <div className={styles.magnifyGlass}>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                alt="test"
                className={styles.imgAvatar}
              ></img>
            </div>
            <div className={styles.magnifyGlassHandle}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutPage;
