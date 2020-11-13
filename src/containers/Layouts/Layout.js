import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import styles from "./Layout.module.scss";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.content}>{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
