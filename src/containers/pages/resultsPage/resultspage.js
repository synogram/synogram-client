import React from "react";
import styles from "./resultspage.module.scss";

import ResultSelector from "../../../components/resultSelector/resultsSelector";
import Results from "../../../components/results/results";

class ResultsPage extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <ResultSelector className={styles.selection}></ResultSelector>
        <Results></Results>
      </div>
    );
  }
}

export default ResultsPage;
