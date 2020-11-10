import React from "react";
import Navbar from "../../components/NavBar/Navbar";
import Auxilary from "../../hoc/auxilary";
import styles from "./Layout.module.scss";

class Layout extends React.Component {
  render() {
    return (
      <Auxilary>
        <Navbar />
        <div className={styles.content}>{this.props.children}</div>
      </Auxilary>
    );
  }
}

export default Layout;
