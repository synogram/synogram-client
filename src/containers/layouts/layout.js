import React from "react";
import Toolbar from "../toolbar/toolbar";
import Auxilary from "../../hoc/auxilary";
import styles from "./layout.module.scss";

class Layout extends React.Component {
  render() {
    return (
      <Auxilary>
        <Toolbar />
        <div className={styles.content}>{this.props.children}</div>
      </Auxilary>
    );
  }
}

export default Layout;
