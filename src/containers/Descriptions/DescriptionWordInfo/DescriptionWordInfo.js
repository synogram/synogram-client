import React from "react";
import styles from "./DescriptionWordInfo.module.scss";
import {connect} from "react-redux";
import {replaceStrToJSX} from "../../../utilities/helperFunctions";
import messages, {keywords} from "../../../constants/Messages";

const DescriptionWordInfo = (props) => {
  return (
    <>
      {props.searchWord ? (
        <>
          <h1>{props.searchWord}</h1>
          <div>
            {props.definition && (
              <div className={styles.text}>
                <label>Definition:</label>
                <p>{props.definition}</p>
              </div>
            )}
            <div className={styles.text}>
              <label>Description:</label>
              {props.isServerOn ? (
                props.description ? (
                  <p>{props.description}</p>
                ) : (
                  <p>{"Description is not supported."}</p>
                )
              ) : (
                <p>
                  {replaceStrToJSX(
                    messages.offlineServerDescription,
                    keywords.link,
                    <a
                      href="https://github.com/synogram/synogram"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      key={"github repo link"}
                    >
                      {messages.github}
                    </a>
                  )}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <h1>No word searched. Start by entering a word in the searchbox</h1>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchWord: state.general.searchWord,
    description: state.summary.summary,
    definition: state.dictionary.definition,
    descriptionError: state.summary.error,
    definitionError: state.dictionary.error,
    isServerOn: state.server.isServerOn,
  };
};

export default connect(mapStateToProps)(DescriptionWordInfo);
