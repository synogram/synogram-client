import React from "react";
import styles from "./AboutPage.module.scss";

class AboutPage extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        <h1>Name</h1>
        <h1>Pic</h1>
        <h1>History</h1>
        <h1>etc</h1>
        <h1>....</h1>
      </div>
    );
  }
}

export default AboutPage;
