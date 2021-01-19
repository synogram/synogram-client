import {render} from "enzyme";
import React from "react";
import styles from "./GraphSelection.module.scss";
import {useSelector} from "react-redux";
const GraphSelection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        Observe the related words in a tree graph format
      </p>
      <button>Tree Graph</button>
    </div>
  );
};

export default GraphSelection;
