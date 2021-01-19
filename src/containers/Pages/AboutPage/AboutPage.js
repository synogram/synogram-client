import React from "react";
import styles from "./AboutPage.module.scss";

import AboutUs from "./AboutUs/AboutUs.js";
import TeamProfile from "./TeamProfile/TeamProfile.js";

import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";
import Aux from "../../../hoc/auxilary";

class AboutPage extends React.Component {
  render() {
    return (
      <Aux>
        <NavBarWSeachbar isSearchBarHidden={true} />
        <div className={styles.content}>
          <AboutUs />
          <TeamProfile />
        </div>
      </Aux>
    );
  }
}

export default AboutPage;
