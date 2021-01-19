import React from "react";
import Aux from "../../../hoc/auxilary.js";
import styles from "./DescriptionWordListBtns.module.scss";
import {connect} from "react-redux";
import * as actionTypes from "../../../store/index";

const DescriptionWordListBtns = (props) => {
  const randomWords = props.wordListArr.map((word, index) => {
    let style = {};
    if (index < 3) {
      style = {backgroundColor: "#FD5D08"};
    } else if (index < 6) {
      style = {backgroundColor: "#FE9B08"};
    } else if (index < 9) {
      style = {backgroundColor: "#FFD908"};
    } else {
      style = {backgroundColor: "#FFFCEB"};
    }
    return (
      <button
        key={word + index}
        className={styles.wordListButtons}
        style={style}
        onClick={() => {
          props.storeSearchWord(word);
          props.addRelatedWord(word);
          props.getSummary(word);
          props.getWordDictionary(word);
        }}
      >
        {word}
      </button>
    );
  });
  return <Aux>{randomWords}</Aux>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    addRelatedWord: (value) => dispatch(actionTypes.addRelatedWords(value)),
    getSummary: (value) => dispatch(actionTypes.getSummary(value)),
    getWordDictionary: (value) =>
      dispatch(actionTypes.getWordDictionary(value)),
    storeSearchWord: (value) =>
      dispatch(actionTypes.storeSearchWord({searchWord: value})),
  };
};

export default connect(null, mapDispatchToProps)(DescriptionWordListBtns);
