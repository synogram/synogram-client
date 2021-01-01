import React from "react";
import styles from "./Error.module.scss";
const Error = (props) => {
  return (
    <div className={styles.error}>
      <div className={styles.errorImage}>
        <div className={styles.outerHexagon} />
        <div className={styles.innerHexagon} />
        <span className={styles.i}>!</span>
      </div>
      <p className={styles.message}>
        {`Something unexpected occured. Please try again! ${
          props.errorCode ? props.errorCode : `(error)`
        }`}
      </p>
    </div>
  );
};

export default Error;
