import React from "react";
import styles from "./DescriptionWordInfo.module.scss";
import {connect} from "react-redux";
import Loading from "../../../components/Loading/Loading";

const DescriptionWordInfo = (props) => {
  return (
    <>
    {props.searchWord ? 
      <> 
        <h1>{props.searchWord}</h1>
        { props.definitionLoading && props.descriptionLoading ? 
          <Loading/>
          :
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
        }
      </>
      :
      <>
        <h1>No word searched. Start by entering a word in the searchbox</h1>
      </>
    }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    searchWord: state.general.searchWord,
    description: state.summary.summary,
    definition: state.dictionary.definition,
    descriptionLoading: state.summary.loading,
    definitionLoading: state.dictionary.loading,
    descriptionError: state.summary.error,
    definitionError: state.dictionary.error
  };
};

export default connect(mapStateToProps)(DescriptionWordInfo);
