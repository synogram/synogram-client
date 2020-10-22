import React from "react";
import { Route } from "react-router-dom";

import Layout from "./containers/layouts/layout";
import SearchPage from "./containers/pages/searchPage/searchpage";
import ResultsPage from "./containers/pages/resultsPage/resultspage";
import AboutPage from "./containers/pages/aboutpage/aboutpage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Layout className="Layout">
          <Route path="/" exact render={() => <SearchPage></SearchPage>} />
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
