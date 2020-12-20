import React from "react";
import styles from "./GraphSelection.module.scss";
const GraphSelection = () => {
  return (
    <div className={styles.container}>
      <p className={styles.description}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat."
      </p>
      <button>Tree Graph</button>
    </div>
  );
};

export default GraphSelection;
