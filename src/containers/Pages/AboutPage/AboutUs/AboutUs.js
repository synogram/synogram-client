import React from "react";
import MESSAGE from "../../../../constants/Messages.js";
import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h1>{MESSAGE.about_page_title}</h1>
      <h2>{MESSAGE.about_page_subtitle}</h2>
      <p>{MESSAGE.about_page_description1}</p>
      <p>{MESSAGE.about_page_description2}</p>
    </div>
  );
};

export default AboutUs;
