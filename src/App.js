import React from "react";
import { Route } from "react-router-dom";

import Layout from "./containers/Layouts/Layout";
import HomePage from "./containers/Pages/HomePage/HomePage";
import ResultsPage from "./containers/Pages/ResultsPage/ResultsPage";
import AboutPage from "./containers/Pages/AboutPage/AboutPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout className="Layout">
          <Route path="/" exact render={() => <HomePage></HomePage>} />
          <Route
            path="/results"
            exact
            render={() => <ResultsPage></ResultsPage>}
          />
          <Route path="/about" exact render={() => <AboutPage />} />
        </Layout>
      </div>
    );
  }
}

export default App;
