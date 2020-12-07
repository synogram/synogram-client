import React from "react";
import styles from "./ResultsPage.module.scss";
import Descriptions from "../../Descriptions/Descriptions";

import Results from "../../../components/Results/Results";

class ResultsPage extends React.Component {
  render() {
    return (
      <div>
        <Results></Results>
        <Descriptions />
      </div>
    );
  }
}

export default ResultsPage;
