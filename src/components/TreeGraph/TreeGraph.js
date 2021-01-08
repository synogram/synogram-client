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
    console.log(this.state.translate);
  }

  componentDidUpdate(prevProps, prevState) {}
  render() {
    console.log(this.state.translate);
    console.log(this.props.relatedWords);
    return (
      <div
        className={styles.treeGraphContainer}
        ref={(tc) => (this.treeContainer = tc)}
      >
        <Tree
          data={this.props.relatedWords}
          translate={this.state.translate}
          pathFunc="straight"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          zoomable={true}
          onNodeClick={(nodeValue, event) => {
            this.props.addRelatedWord(nodeValue.name);
            this.props.getSummary(nodeValue.name);
            this.props.getWordDictionary(nodeValue.name);
          }}
        />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addRelatedWord: (value) => dispatch(actionTypes.addRelatedWords(value)),
    getSummary: (value) => dispatch(actionTypes.getSummary(value)),
    getWordDictionary: (value) =>
      dispatch(actionTypes.getWordDictionary(value)),
  };
};
export default connect(null, mapDispatchToProps)(TreeGraph);
