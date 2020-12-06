import React from "react";
import styles from "./ResultsPage.module.scss";
import NavBarWSeachbar from "../../../components/NavBarWSearchbar/NavBarWSeachbar";
import { connect } from "react-redux";
import * as actionTypes from "../../../store/index"

class ResultsPage extends React.Component {

  componentDidMount() {
    if(this.props.searchWord) {
      this.props.getRelatedWord(this.props.searchWord);
      this.props.getSummary(this.props.searchWord)
    }
  }

  render() {
    return (
      <div>
        <NavBarWSeachbar/>
        {!this.props.searchWord && <div>No word searched. Try again.</div>}
        {this.props.searchWord && this.props.relatedWords.length < 1 && this.props.loading && <div>Loading...</div>}
        {this.props.relatedWords.length > 0 && !this.props.loading && <div>Loaded</div>}
        {this.props.error && <div>error</div>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchWord: state.general.searchWord,
    loading: state.related.loading,
    relatedWords: state.related.relatedWords,
    error: state.related.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRelatedWord: (value) => dispatch(actionTypes.getRelatedWords(value)),
    getSummary: (value) => dispatch(actionTypes.getSummary(value))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage) ;
