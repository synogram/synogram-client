import React, {Component} from "react";
import Tree from "react-d3-tree";
import styles from "./TreeGraph.module.scss";
import "./Node.module.scss";
import {connect} from "react-redux";
import * as actionTypes from "../../store/index";
class TreeGraph extends Component {
  state = {translate: {x: 0, y: 0}, reload: false};

  componentDidMount() {
    
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 7,
        y: dimensions.height / 2,
      },
    });
  }

  render() {
    return (
      <div
        className={styles.treeGraphContainer}
        ref={(tc) => (this.treeContainer = tc)}
      >
       { this.props.relatedWordsTree !== undefined && Object.keys(this.props.relatedWordsTree).length !== 0 && <Tree
          data={this.props.relatedWordsTree ? this.props.relatedWordsTree : {}}
          translate={this.state.translate}
          pathFunc="straight"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          zoomable={true}
          onNodeClick={(nodeValue, event) => {
            this.props.storeSearchWord(nodeValue.name);
            this.props.addRelatedWord(nodeValue.name);
            this.props.getSummary(nodeValue.name);
            this.props.getWordDictionary(nodeValue.name);
          }}
        />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    relatedWordsTree: state.related.relatedWordsTree
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRelatedWord: (searchWord) => dispatch(actionTypes.addRelatedWords({searchWord})),
    getSummary: (value) => dispatch(actionTypes.getSummary(value)),
    getWordDictionary: (value) =>
      dispatch(actionTypes.getWordDictionary(value)),
    storeSearchWord: (value) =>
      dispatch(actionTypes.storeSearchWord({searchWord: value})),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TreeGraph);
