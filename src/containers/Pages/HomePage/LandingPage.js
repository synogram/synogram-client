import React from "react";
import styles from "./LandingPage.module.scss";
import SearchBar from "../../../components/SearchBar/SearchBar";
import messages, {keywords} from "../../../constants/Messages";
import NavBar from "../../../components/NavBar/Navbar";
import {connect} from "react-redux";
import {RESET_REDUX_STATE} from "../../../store/actions/actionTypes";
import Logo from "../../../components/Logo/Logo";
import Notification from "../../../components/Notification/Notification";
import {replaceStrToJSX} from "../../../utilities/helperFunctions";

class LandingPage extends React.Component {
  magnifyGlassId = "Magnifying_Glass";

  componentDidMount() {
    // If you return to the landingPage. The redux state has to reset.
    this.props.resetRedux();
  }

  render() {
    return (
      <div className={styles.landingPage}>
        {!this.props.isServerOn && (
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

        <div className={styles.content}>
          <NavBar className={styles.landingPageNavbar} />
          <Logo />
          <SearchBar isSmall={false} />
          <div className={styles.landingPageDescription}>
            <p>{messages.landingPageDescription}</p>
          </div>
        </div>
        <div id={this.magnifyGlassId} className={styles.magnifyGlass}>
          <div className={styles.outerGlass} />
          <div className={styles.innerGlass} />
          <div className={styles.glassHandle} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isServerOn: state.server.isServerOn,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    resetRedux: () => dispatch({type: RESET_REDUX_STATE}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
