import React from "react";
import styles from "./Layout.module.scss";
import {Route} from "react-router-dom";
import LandingPage from "../Pages/HomePage/LandingPage";
import ResultsPage from "../Pages/ResultsPage/ResultsPage";
import AboutPage from "../Pages/AboutPage/AboutPage";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout} style={{height: "100%"}}>
        <Route path="/" exact render={() => <LandingPage></LandingPage>} />
        <Route
          path="/results"
          exact
          render={() => <ResultsPage></ResultsPage>}
        />
        <Route path="/about" exact render={() => <AboutPage />} />
      </div>
    );
  }
}

export default Layout;
