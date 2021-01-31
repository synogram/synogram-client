import React from "react";
import styles from "./DescriptionWordInfo.module.scss";
import {connect} from "react-redux";

const DescriptionWordInfo = (props) => {
  return (
    <>
      <h1>{props.searchWord}</h1>
      <div>
        {props.definition && (
          <div className={styles.text}>
            <label>Definition:</label>
            <p>{props.definition}</p>
          </div>
        )}
        {props.description && (
          <div className={styles.text}>
            <label>Description:</label>
            <p>{props.description}</p>
          </div>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchWord: state.general.searchWord,
    description: state.summary.summary,
    definition: state.dictionary.definition,
  };
};

export default connect(mapStateToProps)(DescriptionWordInfo);
