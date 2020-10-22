import React from "react";
import styles from "./results.module.scss";
import Plotly from "plotly.js-dist";
import createPlotlyComponent from "react-plotly.js/factory";
import { getSummary } from "../../utilities/axios/apiHandler";

const Plot = createPlotlyComponent(Plotly);

class Results extends React.Component {
  render() {
    return (
      <div className={styles.graphContainer}>
        <Plot
          className={styles.graph}
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: "scatter",
              mode: "lines+markers",
              marker: { color: "red" },
            },
            { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
          ]}
          graphDiv="graph"
        />
      </div>
    );
  }
}

export default Results;
