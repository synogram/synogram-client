import React from "react";
import {connect} from "react-redux";
import * as actionTypes from "../../store/index";

import styles from "./Notification.module.scss";

const Notification = (props) => {
  return (
    <div className={styles.container}>
      <button
        className={styles.closeBtn}
        onClick={() => {
          props.setShowServerStatus(false);
        }}
      >
        x
      </button>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowServerStatus: (value) =>
      dispatch(actionTypes.setShowServerStatus(value)),
  };
};

export default connect(null, mapDispatchToProps)(Notification);
