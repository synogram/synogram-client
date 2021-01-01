import React, {Component} from "react";
import Tree from "react-d3-tree";
import styles from "./TreeGraph.module.scss";
import "./Node.module.scss";

class TreeGraph extends Component {
  state = {translate: {x: 0, y: 0}, reload: false};

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
        y: dimensions.height / 2,
      },
    });
  }

  componentDidUpdate(prevProps, prevState) {}
  render() {
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
          zoomable={false}
          onNodeClick={(nodeValue, event) => {}}
        />
      </div>
    );
  }
}

export default TreeGraph;
