import React from "react";
import Aux from "../../../hoc/auxilary.js";
import styles from "./DescriptionButtons.module.scss";

const DescriptionButtons = (props) => {
  const randomWords = props.wordListArr.map((word, index) => {
    let style = {};
    if (index < 3) {
      style = { backgroundColor: "#FD5D08" };
    } else if (index < 6) {
      style = { backgroundColor: "#FE9B08" };
    } else if (index < 9) {
      style = { backgroundColor: "#FFD908" };
    } else {
      style = { backgroundColor: "#FFFCEB" };
    }
    return (
      <button className={styles.wordListButtons} style={style}>
        {word}
      </button>
    );
  });
  return <Aux>{randomWords}</Aux>;
};

export default DescriptionButtons;
