import React from "react";
import styles from "./Results.module.scss";
import { Wiki2VecScatter2d, Wiki2VecScatter3d } from "../plots/wiki2vec";

const Results = () => {
  return (
    <div className={styles.graphContainer}>
      <Wiki2VecScatter2d queryWord="QueryWord" />
      <Wiki2VecScatter3d queryWord="QueryWord" />
    </div>
  );
};

export default Results;
