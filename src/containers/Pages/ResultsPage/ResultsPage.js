import React from "react";
import styles from "./ResultsPage.module.scss";
import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";

import Descriptions from "../../Descriptions/Descriptions";
import {connect} from "react-redux";
import * as actionTypes from "../../../store/index";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
import GraphSelection from "../../../components/GraphSelection/GraphSelection";
import TreeGraph from "../../../components/TreeGraph/TreeGraph";

class ResultsPage extends React.Component {
  componentDidMount() {
    if (this.props.searchWord) {
      this.generateSearchWordData();
    }
  }

  componentDidUpdate(prevprops) {
    // When searching again through the nav bar, check if the word searched is different
    if (prevprops.initialSearchWord !== this.props.initialSearchWord) {
      this.generateSearchWordData();
    }
  }

  generateSearchWordData() {
    this.props.getRelatedWord(this.props.searchWord);
    this.props.getSummary(this.props.searchWord);
    this.props.getWordDictionary(this.props.searchWord);
  }

  render() {
    return (
      <div className={styles.container}>
        {this.props.error ? <Error /> : 
          <React.Fragment>
            <NavBarWSeachbar isSearchBarHidden={false} />
            {this.props.searchWord && this.props.loading && <Loading />}
            <div className={styles.resultsContent}>
              <TreeGraph />
              <GraphSelection />
            </div>
            <Descriptions />
          </React.Fragment>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchWord: state.general.searchWord,
    initialSearchWord: state.general.initialSearchWord,
    loading: state.related.loading,
    relatedWords: state.related.relatedWords,
    relatedWordsTree: state.related.relatedWordsTree,
    error: state.related.error,
    dictionaryLoading: state.dictionary.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedWord: (value) => dispatch(actionTypes.getRelatedWords(value)),
    getSummary: (value) => dispatch(actionTypes.getSummary(value)),
    getWordDictionary: (value) =>
      dispatch(actionTypes.getWordDictionary(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
