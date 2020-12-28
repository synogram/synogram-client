import React from "react";
import styles from "./ResultsPage.module.scss";
import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";
import {connect} from "react-redux";
import * as actionTypes from "../../../store/index";
import GraphSelection from "../../../components/GraphSelection/GraphSelection";
import Loading from "../../../components/Loading/Loading";
import Error from "../../../components/Error/Error";
class ResultsPage extends React.Component {
  componentDidMount() {
    if (this.props.searchWord) {
      this.generateSearchWordData();
    }
  }

  componentDidUpdate(prevprops, prevState) {
    if (prevprops.searchWord !== this.props.searchWord) {
      this.generateSearchWordData();
    }
  }

  generateSearchWordData() {
    this.props.getRelatedWord(this.props.searchWord);
    this.props.getSummary(this.props.searchWord);
<<<<<<< HEAD
    this.props.getWordDictionary(this.props.searchWord);
=======
>>>>>>> 583b985627c8f2bf67b2a5a3387bf018c2c796b8
  }

  render() {
    return (
      <div className={styles.container}>
        <NavBarWSeachbar />
        {!this.props.searchWord && <div>No word searched. Try again.</div>}
<<<<<<< HEAD
        {this.props.searchWord && this.props.relatedWords.length < 1 && this.props.loading && <div>Loading...</div>}
        {this.props.relatedWords.length > 0 && !this.props.loading && <div>Loaded</div>}
        {this.props.error && <div>error</div>}
        {!this.props.dictionaryLoading && <GraphSelection/>}
=======
        {this.props.searchWord &&
          this.props.relatedWords.length < 1 &&
          this.props.loading && <Loading />}
        {this.props.relatedWords.length > 0 && !this.props.loading && (
          <div>
            <GraphSelection />
          </div>
        )}
        {this.props.error && <Error />}
>>>>>>> 583b985627c8f2bf67b2a5a3387bf018c2c796b8
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchWord: state.general.searchWord,
    loading: state.related.loading,
    relatedWords: state.related.relatedWords,
    error: state.related.error,
<<<<<<< HEAD
    dictionaryLoading: state.dictionary.loading,
  }
}
=======
  };
};
>>>>>>> 583b985627c8f2bf67b2a5a3387bf018c2c796b8

const mapDispatchToProps = (dispatch) => {
  return {
    getRelatedWord: (value) => dispatch(actionTypes.getRelatedWords(value)),
    getSummary: (value) => dispatch(actionTypes.getSummary(value)),
<<<<<<< HEAD
    getWordDictionary: (value) => dispatch(actionTypes.getWordDictionary(value))
  }
}

=======
  };
};
>>>>>>> 583b985627c8f2bf67b2a5a3387bf018c2c796b8

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);
