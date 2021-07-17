import React from "react";
import messages from "../../constants/Messages";
import styles from "./GraphSelection.module.scss";

const GraphSelection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>{messages.graphSelectionTreeGraph}</p>
      <button>Tree Graph</button>
    </div>
  );
};

export default GraphSelection;
