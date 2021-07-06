import React from "react";

import styles from "./Notification.module.scss";

const Notification = (props) => {
  return (
    <div className={styles.container}>
      <button className={styles.closeBtn}>x</button>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

export default Notification;
