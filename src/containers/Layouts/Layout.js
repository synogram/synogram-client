import React from "react";
import styles from "./Layout.module.scss";
import {Route} from "react-router-dom";
import LandingPage from "../Pages/HomePage/LandingPage";
import ResultsPage from "../Pages/ResultsPage/ResultsPage";
import AboutPage from "../Pages/AboutPage/AboutPage";
import Notification from "../../components/Notification/Notification";
import {replaceStrToJSX} from "../../utilities/helperFunctions";
import messages, {keywords} from "../../constants/Messages";
import {connect} from "react-redux";

class Layout extends React.Component {
  render() {
    return (
      <div className={styles.layout}>
        {!this.props.isServerOn && this.props.showServerStatus && (
          <Notification
            text={replaceStrToJSX(
              messages.offlineServerDefault,
              keywords.link,
              <a
                href="https://github.com/synogram/synogram"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
                key={"github repo link"}
              >
                {messages.github}
              </a>
            )}
          />
        )}
        <Route path="/" exact render={() => <LandingPage></LandingPage>} />
        <Route
          path="/results"
          exact
          render={() => <ResultsPage></ResultsPage>}
        />
        <Route path="/about" exact render={() => <AboutPage />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isServerOn: state.server.isServerOn,
    showServerStatus: state.server.showServerStatus,
  };
};

export default connect(mapStateToProps)(Layout);
