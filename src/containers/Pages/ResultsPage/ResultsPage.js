import React from "react";
import styles from "./ResultsPage.module.scss";

import Results from "../../../components/Results/Results";
import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";

class ResultsPage extends React.Component {
  render() {
    return (
      <div>
        <NavBarWSeachbar/>
      </div>
    );
  }
}

export default ResultsPage;
