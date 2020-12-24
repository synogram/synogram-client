import React, {Component} from "react";
import Tree from "react-d3-tree";
import styles from "./TreeGraph.module.scss";
import "./Node.module.scss";
const myTreeData = [
  {
    name: "Top Level",
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C",
    },
    children: [
      {
        name: "Level 2: A",
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C",
        },
      },
      {
        name: "Level 2: B",
      },
    ],
  },
];

class TreeGraph extends Component {
  state = {translate: {x: 0, y: 0}};

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 2,
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
        <Tree
          data={myTreeData}
          translate={this.state.translate}
          pathFunc="straight"
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
          zoomable={false}
        />
      </div>
    );
  }
}

export default TreeGraph;
