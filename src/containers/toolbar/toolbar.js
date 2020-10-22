import React from "react";
import styles from "./toolbar.module.css";

class Toolbar extends React.Component {
  render() {
    return (
      <header className={styles.toolbar}>
        <div>Logo</div>
        <div>About Us</div>
      </header>
    );
  }
}

export default Toolbar;
